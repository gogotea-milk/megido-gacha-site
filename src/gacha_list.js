import React from "react";
import ReactDOM from "react-dom";
import { sprintf } from "sprintf-js";

function to_percent(num) {
  return sprintf("%.2f%%", Math.floor(num * 100 * 100) / 100);
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
          <th class="border border-gray-400 p-1 text-gray-800 bg-green-100">
            ガチャ名
          </th>
          <th class="border border-gray-400 p-1 text-gray-800 bg-green-100">
            新規メギド率
          </th>
          <th class="border border-gray-400 p-1 text-gray-800 bg-green-100">
            メギド被り率
          </th>
          <th class="border border-gray-400 p-1 text-gray-800 bg-green-100">
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

export default GachaList;
