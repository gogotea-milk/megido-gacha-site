import React from "react";
import ReactDOM from "react-dom";
import LZString from "lz-string";
import MegidoCharsData from "./megido_chars_data";
import GachaListData from "./gacha_list_data";
import MegidoList from "./megido_list";
import GachaList from "./gacha_list";
import FilterToggleGroup from "./filter_toggle_group";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    const has_megido_exist_list = !!window.location.hash;

    let megido_exist_list = has_megido_exist_list
      ? JSON.parse(
          LZString.decompressFromEncodedURIComponent(
            window.location.hash.substring(1)
          )
        )
      : [];
    console.log("loaded from hash", megido_exist_list);

    const clock_type_order = {
      祖: 0,
      真: 1
    };

    const megido_index = {};

    const megido_chars = MegidoCharsData.sort((v1, v2) => {
      if (v1.clock_type !== v2.clock_type) {
        return clock_type_order[v1.clock_type] > clock_type_order[v2.clock_type]
          ? 1
          : -1;
      }
      if (v1.clock_id !== v2.clock_id) {
        return v1.clock_id > v2.clock_id ? 1 : -1;
      }

      return v1.regenerated ? 1 : -1;
    }).map((value, index) => {
      let megido = Object.assign({}, value);
      if (!has_megido_exist_list && (megido.main || megido.event)) {
        megido_exist_list.push(megido.id);
      }
      megido_index[megido.id] = megido;

      return megido;
    });

    const gacha_list_data = GachaListData.slice();

    const megido_gacha_rates = megido_chars.map(megido => {
      return gacha_list_data.map(gacha => {
        return this.calc_rate(
          megido,
          megido_chars,
          megido_index,
          gacha.rate_settings
        );
      });
    });

    this.megido_chars = megido_chars;
    this.gacha_list_data = gacha_list_data;
    this.megido_gacha_rates = megido_gacha_rates;

    this.handleMegidoExistChanged = this.handleMegidoExistChanged.bind(this);

    const filter_states = {};
    const filter_labels = {};

    function addFilter(filter, items) {
      filter_labels[filter] = items.map(v => {
        return { label: v, checked: true };
      });
      const filter_state = {};
      items.forEach((v, i) => {
        filter_state[v] = true;
      });
      filter_states["filter_" + filter] = filter_state;
    }

    addFilter("clock_type", ["祖", "祖(Re)", "真", "真(Re)"]);
    addFilter("terminus", ["恒常", "テルナミス"]);
    addFilter("main_evt", ["メイン・イベント", "ガチャ"]);
    addFilter("exists", ["召喚済", "未召喚"]);

    this.filter_label = filter_labels;

    this.state = {
      ...filter_states,
      megido_exist_list: megido_exist_list
    };

    this.handleFilterToggled = this.handleFilterToggled.bind(this);
  }

  calc_rate(megido, megido_chars, megido_index, options = {}) {
    let base_rate = options.base_rate ? options.base_rate : 0.05;

    let targets = megido_chars.filter(value => {
      if (options.pickup && Object.keys(options.pickup).includes(value.id)) {
        return true;
      }

      if (options.exclude && options.exclude(value)) {
        return false;
      }

      if (options.megido_back_of && value.implemented) {
        if (
          Date.parse(value.implemented) > Date.parse(options.megido_back_of)
        ) {
          return false;
        }
      }

      return !(value.main || value.event);
    });

    let targets_terminus = targets.filter(value => {
      return value.terminus;
    });

    let pickup_total_rate = 0.0;
    let pickup_normal_length = 0;
    let pickup_terminus_length = 0;

    if (options.pickup) {
      Object.keys(options.pickup).forEach(key => {
        pickup_total_rate = pickup_total_rate + options.pickup[key];
        if (megido_index[key].terminus) {
          pickup_terminus_length += 1;
        } else {
          pickup_normal_length += 1;
        }
      });

      if (Object.keys(options.pickup).includes(megido.id)) {
        return options.pickup[megido.id];
      }
    }

    if (!targets.find(value => value.id === megido.id)) {
      return 0;
    }

    let target_normal_length =
      targets.length - targets_terminus.length - pickup_normal_length;
    let target_terminus_length =
      targets_terminus.length - pickup_terminus_length;

    let base_length = target_normal_length * 2 + target_terminus_length;

    if (megido.terminus) {
      return (base_rate - pickup_total_rate) / base_length;
    } else {
      return ((base_rate - pickup_total_rate) * 2) / base_length;
    }
  }

  applyExistsToHash(megido_exist_list) {
    window.location.hash = LZString.compressToEncodedURIComponent(
      JSON.stringify(megido_exist_list)
    );
  }

  handleMegidoExistChanged(megido, exist) {
    let megido_exist_list = this.state.megido_exist_list.slice();

    if (exist) {
      megido_exist_list.push(megido.id);
    } else {
      megido_exist_list = megido_exist_list.filter(v => v !== megido.id);
    }

    this.applyExistsToHash(megido_exist_list);
    this.setState({
      megido_exist_list: megido_exist_list
    });
  }

  /**
   * Return gacha rate
   * @param {*} gacha
   */
  calc_gacha_summary() {
    const gacha_summary = Array(this.gacha_list_data.length);

    this.megido_gacha_rates.forEach((megido_rate, i) => {
      this.gacha_list_data.forEach((gacha, gacha_index) => {
        if (!gacha_summary[gacha_index]) {
          gacha_summary[gacha_index] = {
            new_megido: 0.0,
            dup_megido: 0.0,
            megido: 0.0
          };
        }

        const gacha_summay_item = gacha_summary[gacha_index];
        if (this.state.megido_exist_list.includes(this.megido_chars[i].id)) {
          gacha_summay_item.dup_megido += megido_rate[gacha_index];
        } else {
          gacha_summay_item.new_megido += megido_rate[gacha_index];
        }
        gacha_summay_item.megido += megido_rate[gacha_index];
      });
    });
    return gacha_summary;
  }

  handleFilterToggled(filter_name, toggled_item, i) {
    const next = {
      ...this.state[filter_name]
    };
    next[toggled_item] = !this.state[filter_name][toggled_item];
    this.setState({
      [filter_name]: next
    });
  }

  render() {
    return (
      <div className="app" class="container mx-auto px-1 pb-1 text-sm">
        <h1 class="text-2xl mt-6">メギドガチャ被り計算機</h1>
        <div class="my-1">
          <a
            class="text-blue-600 underline hover:text-blue-300"
            href="https://github.com/gogotea-milk/megido-gacha-site"
          >
            このサイトについて
          </a>
        </div>
        <div>
          <GachaList
            gacha_list_data={this.gacha_list_data}
            megido_gacha_rates={this.megido_gacha_rates}
            gacha_summary={this.calc_gacha_summary()}
          />
        </div>
        <div class="text-orange-500 my-3">
          本家は、メギド率が必ず5%（サバト時は10%）を超えるよう、Rオーブ排出率を下げて調整をしているのですが、このサイトでは未対応です。
        </div>
        <div class="container">
          <FilterToggleGroup
            filter_label={this.filter_label.clock_type}
            filter_status={this.state.filter_clock_type}
            handleFilterToggled={(name, i) =>
              this.handleFilterToggled("filter_clock_type", name, i)
            }
          />
          <FilterToggleGroup
            filter_label={this.filter_label.terminus}
            filter_status={this.state.filter_terminus}
            handleFilterToggled={(name, i) =>
              this.handleFilterToggled("filter_terminus", name, i)
            }
          />
          <FilterToggleGroup
            filter_label={this.filter_label.main_evt}
            filter_status={this.state.filter_main_evt}
            handleFilterToggled={(name, i) =>
              this.handleFilterToggled("filter_main_evt", name, i)
            }
          />
          <FilterToggleGroup
            filter_label={this.filter_label.exists}
            filter_status={this.state.filter_exists}
            handleFilterToggled={(name, i) =>
              this.handleFilterToggled("filter_exists", name, i)
            }
          />
        </div>
        <div class="mt-1">
          <MegidoList
            megido_chars={this.megido_chars}
            gacha_list_data={this.gacha_list_data}
            megido_gacha_rates={this.megido_gacha_rates}
            megido_exist_list={this.state.megido_exist_list}
            filter_status={{
              clock_type: this.state.filter_clock_type,                            
              terminus:this.state.filter_terminus,
              main_evt: this.state.filter_main_evt,
              exists: this.state.filter_exists,
            }}
            handleMegidoExistChanged={this.handleMegidoExistChanged}
          />
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<App />, document.getElementById("root"));
