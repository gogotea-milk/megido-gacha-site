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

class MegidoList extends React.Component {
  constructor(props) {
    super(props);
  }

  renderGachaListHeader() {
    return this.props.gacha_list_data.map((value, index) => {
      return (
        <th class="border p-1 w-20 bg-green-100" key={value.name}>
          {value.name}
        </th>
      );
    });
  }

  render() {
    return <table class="table-auto mt-6 border-collapse border-2 border-gray-500">
      <thead>
        <tr>
          <th class="border p-1 bg-green-100">召還済</th>
          <th class="border p-1 bg-green-100">名前</th>
          {this.renderGachaListHeader()}
        </tr>
      </thead>
      <tbody>
        {
          this.props.megido_chars.map((megido, i) => {
            return this.props.megido_chars.map((megido, i) => {
              return (
                <tr key={megido.id}>
                  <td class="border text-center">
                    <input
                      type="checkbox"
                      checked={this.props.megido_exist_list.includes(megido.id) }
                      onChange={() => {
                        this.props.onChange(megido, i);
                      }}
                    />
                  </td>
                  <td class="border px-1">
                    {megido.name +
                      (megido.regenerated ? short_style[megido.style] : "")}
                  </td>
                  {
                    this.props.megido_gacha_rates[i].map((value, index) => {
                      return (
                        <td class="border text-right pr-1" key={index}>
                          {to_percent(value)}
                        </td>
                      );
                    })
                  }
              </tr>
            );
                })
              }
          )
            }
      </tbody>
    </table>
  }  
}

export default MegidoList;
