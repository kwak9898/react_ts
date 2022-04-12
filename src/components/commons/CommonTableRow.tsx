import React from "react";

interface Ichildren {
  children: string;
}

const CommonTableRow = ({ children }: Ichildren) => {
  return <tr className="common-table-row">{children}</tr>;
};

export default CommonTableRow;
