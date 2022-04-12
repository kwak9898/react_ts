import React from "react";
import "./CommonTable.css";

interface Itable {
  headerList: string[];
  children: string;
}

function CommonTable({
  headerList = ["상품명", "상품아이디"],
  children,
}: Itable) {
  return (
    <table className="common-table">
      <thead>
        <tr>
          {headerList.map((item: string, index: number) => {
            return (
              <td className="common-table-header-column" key={index}>
                {item}
              </td>
            );
          })}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}

export default CommonTable;
