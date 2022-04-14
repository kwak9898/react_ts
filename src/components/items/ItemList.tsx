import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CommonTable from "../commons/CommonTable";
import CommonTableColumn from "../commons/CommonTableColumn";
import CommonTableRow from "../commons/CommonTableRow";
import ItemDataModel from "./ItemModel";

function ItemList(props: { itemList: ItemDataModel[] }) {
  return (
    <CommonTable headerList={["제품아이디", "제품명", "가격"]}>
      {props.itemList.map((item, key) => {
        return (
          <CommonTableRow key={key}>
            <CommonTableColumn>{item.id}</CommonTableColumn>
            <CommonTableColumn>
              <Link to={`/item/${item.id}`}>{item.itemName}</Link>
            </CommonTableColumn>
            <CommonTableColumn>{String(item.price)}</CommonTableColumn>
            <CommonTableColumn>
              <Link to={`/item/${item.id}/edit`}>{item.itemName}</Link>
            </CommonTableColumn>
          </CommonTableRow>
        );
      })}
    </CommonTable>
  );
}

export default ItemList;
