import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CommonTable from "../commons/CommonTable";
import CommonTableColumn from "../commons/CommonTableColumn";
import CommonTableRow from "../commons/CommonTableRow";
import ItemDataModel from "./ItemModel";

function ItemList(props: { itemList: ItemDataModel[] }) {
  const [dataEdit, setDataEdit] = useState<ItemDataModel>({
    id: "",
    itemName: "",
    price: 0,
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDataEdit(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <CommonTable headerList={["제품아이디", "제품명", "가격"]}>
      {props.itemList.map((item, key) => {
        return (
          <CommonTableRow key={key}>
            <CommonTableColumn onchange={onChange}>{item.id}</CommonTableColumn>
            <CommonTableColumn onchange={onChange}>
              <Link to={`/item/${item.id}`}>{item.itemName}</Link>
            </CommonTableColumn>
            <CommonTableColumn onchange={onChange}>
              {String(item.price)}
            </CommonTableColumn>
            <CommonTableColumn>
              <Link to={`/item/${item.id}/edit`}>수정</Link>
            </CommonTableColumn>
          </CommonTableRow>
        );
      })}
    </CommonTable>
  );
}

export default ItemList;
