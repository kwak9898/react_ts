import React, { useEffect, useRef, useState } from "react";
import ItemList from "./ItemList";
import * as ItemData from "./ItemData";
import "./Form.css";
import ItemDataModel from "./ItemModel";
import { setDefaultResultOrder } from "dns";
import { atom, useRecoilState } from "recoil";
import { itemListState } from "./itemListState";
import ItemEdit from "./ItemEdit";

interface IitemInput {
  id: string;
  price: number;
  itemName: string;
}

function ItemMain() {
  const [itemList, setItemList] = useRecoilState(itemListState);
  const [input, setInput] = useState<IitemInput>({
    itemName: "",
    id: "",
    price: 0,
  });

  const { itemName, id, price } = input;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const onCreate = () => {
    let item = new ItemDataModel(id, itemName, price);
    setItemList(prev => [...prev, item]);
  };

  return (
    <>
      <ItemList itemList={itemList} />
      <div className="form">
        <label className="title" htmlFor="product-name">
          제품명
        </label>
        <input
          type="text"
          name="itemName"
          id="product-name"
          value={itemName}
          onChange={onChange}
        />
        <label className="title" htmlFor="product-id">
          제품아이디
        </label>
        <input
          type="text"
          name="id"
          id="product-id"
          value={id}
          onChange={onChange}
        />
        <label className="title" htmlFor="product-price">
          가격
        </label>
        <input
          type="text"
          name="price"
          id="product-price"
          value={price}
          onChange={onChange}
        />
        <div className="create-button" onClick={onCreate}>
          추가
        </div>
      </div>
    </>
  );
}
export default ItemMain;
