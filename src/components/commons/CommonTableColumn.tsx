function CommonTableColumn(props: {
  key: number;
  children?: JSX.Element | JSX.Element[];
}) {
  return <td className="common-table-column">{props.children}</td>;
}

export default CommonTableColumn;
