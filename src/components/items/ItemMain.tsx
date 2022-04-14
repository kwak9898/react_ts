import React, { useEffect, useRef, useState } from "react";
import ItemList from "./ItemList";
import "./Form.css";
import ItemDataModel from "./ItemModel";
import { atom, useRecoilState } from "recoil";
import { itemListState } from "./itemListState";
import { Link } from "react-router-dom";

interface IitemInput {
  id: string;
  price: number;
  itemName: string;
}

function ItemMain() {
  const [itemList, setItemList] = useRecoilState(itemListState);

  return (
    <>
      <ItemList itemList={itemList} />
      <Link to={"/item/add"}>
        <button className="item-create-button">추가</button>
      </Link>
    </>
  );
}
export default ItemMain;
