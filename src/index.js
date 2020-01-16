import React from "react";
import ReactDOM from "react-dom";
import { sprintf } from "sprintf-js";
import LZString from "lz-string";
import MegidoCharsData from "./megido_chars_data";
import GachaListData from "./gacha_list_data";
import "./styles.css";

const short_style = {
  バースト: "B",
  カウンター: "C",
  ラッシュ: "R"
};

function to_percent(num) {
  return sprintf("%.4f%%", Math.floor(num * 100 * 10000) / 10000);
  //return sprintf("%.5f%%", (num * 100));
}

class GachaList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <table class="table-auto border-collapse border-2 border-gray-500">
        <thead>
          <th class="border border-gray-400 p-2 text-gray-800 bg-green-100">
            ガチャ名
          </th>
          <th class="border border-gray-400 p-2 text-gray-800 bg-green-100">
            新規メギド率
          </th>
          <th class="border border-gray-400 p-2 text-gray-800 bg-green-100">
            メギド被り率
          </th>
          <th class="border border-gray-400 p-2 text-gray-800 bg-green-100">
            メギド当たり率
          </th>
        </thead>
        <tbody>
          {this.props.gacha_list_data.map((gacha, index) => {
            return (
              <tr>
                <td class="border px-1">{gacha.name}</td>
                <td class="border text-right pr-1">
                  {to_percent(this.props.gacha_summary[index].new_megido)}
                </td>
                <td class="border text-right pr-1">
                  {to_percent(this.props.gacha_summary[index].dup_megido)}
                </td>
                <td class="border text-right pr-1">
                  {to_percent(this.props.gacha_summary[index].megido)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

class MedioTableDatas extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.megido_chars.map((megido, megido_index) => {
      return (
        <tr key={megido.key}>
          <td class="border text-center">
            <input
              type="checkbox"
              checked={megido.exists}
              onChange={() => {
                this.props.onChange(megido, megido_index);
              }}
            />
          </td>
          <td class="border px-1">
            {megido.name +
              (megido.regenerated ? short_style[megido.style] : "")}
          </td>
          {this.props.megido_gacha_rates[megido_index].map((value, index) => {
            return (
              <td class="border text-right pr-1" key={index}>
                {to_percent(value)}
              </td>
            );
          })}
        </tr>
      );
    });
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

    const megido_exist_list = window.location.hash
      ? JSON.parse(
          LZString.decompressFromEncodedURIComponent(
            window.location.hash.substring(1)
          )
        )
      : null;
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
      if (megido_exist_list) {
        megido.exists = megido_exist_list.includes(megido.id);
      } else {
        megido.exists = megido.main || megido.event;
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

    this.state = {
      gacha_list_data: gacha_list_data,
      megido_chars: megido_chars,
      megido_gacha_rates: megido_gacha_rates,
      megido_index: megido_index
    };
  }

  calc_rate(megido, megido_chars, megido_index, options = {}) {
    let base_rate = options.base_rate ? options.base_rate : 0.05;

    let targets = megido_chars.filter(value => {
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

    if (!targets.find(value => value.id === megido.id)) {
      return 0;
    }

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

  applyExistsToHash(megido_chars) {
    const existIds = megido_chars
      .filter(value => {
        return value.exists;
      })
      .map(megido => {
        return megido.id;
      });
    window.location.hash = LZString.compressToEncodedURIComponent(
      JSON.stringify(existIds)
    );
  }

  handleChange(megido, index) {
    console.log(megido, index);
    const megido_chars = this.state.megido_chars.slice();

    megido_chars[index].exists = !megido_chars[index].exists;
    this.applyExistsToHash(megido_chars);
    this.setState({
      megido_chars: megido_chars
    });
  }

  /**
   * Return gacha rate
   * @param {*} gacha
   */
  calc_gacha_summary() {
    const gacha_summary = Array(this.state.gacha_list_data.length);

    this.state.megido_gacha_rates.forEach((megido_rate, megido_index) => {
      this.state.gacha_list_data.forEach((gacha, gacha_index) => {
        if (!gacha_summary[gacha_index]) {
          gacha_summary[gacha_index] = {
            new_megido: 0.0,
            dup_megido: 0.0,
            megido: 0.0
          };
        }

        const gacha_summay_item = gacha_summary[gacha_index];
        if (this.state.megido_chars[megido_index].exists) {
          gacha_summay_item.dup_megido += megido_rate[gacha_index];
        } else {
          gacha_summay_item.new_megido += megido_rate[gacha_index];
        }
        gacha_summay_item.megido += megido_rate[gacha_index];
      });
    });
    return gacha_summary;
  }

  renderGachaListHeader() {
    return this.state.gacha_list_data.map((value, index) => {
      return (
        <th class="border p-1 w-20 bg-green-100" key={value.name}>
          {value.name}
        </th>
      );
    });
  }

  render() {
    return (
      <div className="app" class="container mx-auto">
        <h1 class="text-2xl mt-6">メギドガチャ被り計算機</h1>
        <div class="my-1">
          <a
            class="text-blue-600 underline hover:text-blue-300"
            href="https://github.com/gogotea-milk/megido-gacha-site"
          >
            このサイトについて
          </a>
        </div>
        <div class="container mx-auto">
          <GachaList
            gacha_list_data={this.state.gacha_list_data}
            megido_gacha_rates={this.state.megido_gacha_rates}
            gacha_summary={this.calc_gacha_summary()}
          />
          <div class="text-orange-500 my-3">
            本家は、メギド率が必ず5%（サバト時は10%）を超えるよう、Rオーブ排出率を下げて調整をしているのですが、このサイトでは未対応です。
          </div>
        </div>
        <table class="table-auto mt-6 border-collapse border-2 border-gray-500">
          <thead>
            <tr>
              <th class="border p-1 bg-green-100">召還済</th>
              <th class="border p-1 bg-green-100">名前</th>
              {this.renderGachaListHeader()}
            </tr>
          </thead>
          <tbody>
            <MedioTableDatas
              megido_chars={this.state.megido_chars}
              gacha_list_data={this.state.gacha_list_data}
              megido_gacha_rates={this.state.megido_gacha_rates}
              onChange={(megido, index) => this.handleChange(megido, index)}
            />
          </tbody>
        </table>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<App />, document.getElementById("root"));
