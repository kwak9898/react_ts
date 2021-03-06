import React from "react";

const CommonTableRow = (props: {
  children: JSX.Element | JSX.Element[] | string;
  key: number;
}) => {
  return <tr className="common-table-row">{props.children}</tr>;
};

export default CommonTableRow;
