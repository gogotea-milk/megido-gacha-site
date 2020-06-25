import React from "react";
import { sprintf } from "sprintf-js";

function to_percent(num) {
  return sprintf("%.2f%%", Math.floor(num * 100 * 100) / 100);
  //return sprintf("%.5f%%", (num * 100));
}

class GachaList extends React.Component {
  render() {
    return (
      <table className="table-auto border-collapse border-2 border-gray-500">
        <thead>
          <tr>
            <th className="border border-gray-400 p-1 text-gray-800 bg-green-100">
              ガチャ名
            </th>
            <th className="border border-gray-400 p-1 text-gray-800 bg-green-100">
              新規メギド率
            </th>
            <th className="border border-gray-400 p-1 text-gray-800 bg-green-100">
              メギド被り率
            </th>
            <th className="border border-gray-400 p-1 text-gray-800 bg-green-100">
              メギド当たり率
            </th>
          </tr>
        </thead>
        <tbody>
          {this.props.gacha_list_data.map((gacha, index) => {
            return (
              <tr key="{index}">
                <td className="border px-1">{gacha.name}</td>
                <td className="border text-right pr-1">
                  {to_percent(this.props.gacha_summary[index].new_megido)}
                </td>
                <td className="border text-right pr-1">
                  {to_percent(this.props.gacha_summary[index].dup_megido)}
                </td>
                <td className="border text-right pr-1">
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
