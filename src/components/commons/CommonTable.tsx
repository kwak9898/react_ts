import React from "react";
import "./CommonTable.css";

function CommonTable(props: {
  headerList: string[];
  children: JSX.Element | JSX.Element[];
}) {
  return (
    <table className="common-table">
      <thead>
        <tr>
          {props.headerList.map((item: string, index: number) => {
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
