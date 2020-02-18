import React from "react";
import ReactDOM from "react-dom";
import { sprintf } from "sprintf-js";

const short_style = {
  バースト: "B",
  カウンター: "C",
  ラッシュ: "R"
};

function to_percent(num) {
  return sprintf("%.4f%%", Math.floor(num * 100 * 10000) / 10000);
  //return sprintf("%.5f%%", (num * 100));
}

class MegidoRow extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log(e.target.checked);
    this.props.handleMegidoExistChanged(this.props.megido, e.target.checked);
  }

  render() {
    return (
      <tr class="even:bg-purple-100">
        <td class="border text-center w-14">
          <input
            type="checkbox"
            checked={this.props.exists}
            onChange={this.handleChange}
          />
        </td>
        <td class="border px-1 whitespace-no-wrap w-32">
          {this.props.megido.name +
            (this.props.megido.regenerated
              ? short_style[this.props.megido.style]
              : "")}
        </td>
        <td class="border pr-1 w-32 w-calc(full-(14+32))">
          <div class="flex flex-col flex-no-wrap">
            {this.props.gacha_rates.map((value, index) => {
              return (
                <div
                  class="flex flex-row  justify-end border-b last:border-b-0"
                  key={index}
                >
                  <div class="flex-glow flex-shrink text-right truncate pl-1">
                    {this.props.gacha_names[index]}
                  </div>
                  <div class="flex-grow-0 flex-shrink-0 text-right whitespace-no-wrap ml-1">
                    {to_percent(value)}
                  </div>
                </div>
              );
            })}
          </div>
        </td>
      </tr>
    );
  }
}

class MegidoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <table class="w-full sm:w-auto table-fixed sm:table-auto border-collapse border-2 border-gray-500">
        <thead>
          <tr>
            <th class="border p-1 bg-green-100 whitespace-no-wrap w-14">
              召還済
            </th>
            <th class="border p-1 bg-green-100 whitespace-no-wrap w-32">
              名前
            </th>
            <th class="border p-1 bg-green-100 whitespace-no-wrap w-calc(full-(14+32))">
              当たり率
            </th>
          </tr>
        </thead>
        <tbody>
          {this.props.megido_chars.map((megido, i) => {
            return (
              <MegidoRow
                megido={megido}
                key={megido.id}
                exists={this.props.megido_exist_list.includes(megido.id)}
                gacha_names={this.props.gacha_list_data.map(v => v.name)}
                gacha_rates={this.props.megido_gacha_rates[i]}
                handleMegidoExistChanged={this.props.handleMegidoExistChanged}
              />
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default MegidoList;
