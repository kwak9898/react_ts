function CommonTableColumn(props: {
  children: JSX.Element | JSX.Element[] | string;
}): JSX.Element {
  return <td className="common-table-column">{props.children}</td>;
}

export default CommonTableColumn;
