import React from "react";

interface Ichildren {
  children: string;
}

function CommonTableColumn({ children }: Ichildren) {
  return <td className="common-table-column">{children}</td>;
}

export default CommonTableColumn;
