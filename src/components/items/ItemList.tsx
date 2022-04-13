import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CommonTable from "../commons/CommonTable";
import ItemData from "./ItemData";
import ItemDataModel from "./ItemModel";

interface Iprops {
  key: number;
  id: string;
  itemName: string;
  price: number;
}

interface Istate {
  key: number;
  id: string;
  itemName: string;
  price: number;
}

function ItemList(props: { itemList: ItemDataModel[] }) {
  return (
    <>
      {props.itemList.map((item, no) => {
        return <p>{item.itemName}</p>;
      })}
    </>
  );
}

export default ItemList;
