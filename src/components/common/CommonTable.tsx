import React from "react";
import "./CommonTable.css";

interface Itable {
  headersName: string;
  children: string;
}

function CommonTable({ headersName, children }: Itable) {
  return (
    <table className="common-table">
      <thead>
        <tr>
          {props.headersName.map((item: string, index: string) => {
            return (
              <td className="common-table-header-column" key={index}>
                {item}
              </td>
            );
          })}
        </tr>
      </thead>
      <tbody>{props.children}</tbody>
    </table>
  );
}

export default CommonTable;
