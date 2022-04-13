import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CommonTable from "../commons/CommonTable";
import CommonTableColumn from "../commons/CommonTableColumn";
import CommonTableRow from "../commons/CommonTableRow";
import ItemData from "./ItemData";
import ItemDataModel from "./ItemModel";

interface Iprops {
  key: number;
  id: string;
  itemName: string;
  price: number;
}

// interface Istate {
//   key: number;
//   id: string;
//   itemName: string;
//   price: number;
// }

function ItemList(props: { itemList: ItemDataModel[] }) {
  const [dataList, setDataList] = useState<ItemDataModel>(
    new ItemDataModel("첫번째 아이디", "첫번째 아이템", 10000)
  );

  useEffect(() => {
    setDataList(dataList);
  }, [dataList]);

  return (
    <CommonTable headersName={["제품번호", "제품명", "제품아이디", "가격"]}>
      {props.productData
        ? props.productData.map((item, key) => {
            return (
              <CommonTableRow key={no}>
                <CommonTableColumn>{item.no}</CommonTableColumn>
                <CommonTableColumn>
                  <Link to={`/item/${item.no}`}>{item.productName}</Link>
                </CommonTableColumn>
                <CommonTableColumn>{item.id}</CommonTableColumn>
                <CommonTableColumn>{item.price}</CommonTableColumn>
              </CommonTableRow>
            );
          })
        : ""}
    </CommonTable>
  );
}

export default ItemList;
