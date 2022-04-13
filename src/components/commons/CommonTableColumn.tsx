function CommonTableColumn(props: {
  children: JSX.Element | JSX.Element[] | string;
}) {
  return <td className="common-table-column">{props.children}</td>;
}

export default CommonTableColumn;
