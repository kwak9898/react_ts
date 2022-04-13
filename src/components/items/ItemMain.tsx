import React, { useRef, useState } from "react";
import ItemList from "./ItemList";
import * as ItemData from "./ItemData";
import "./Form.css";
import ItemDataModel from "./ItemModel";
import { setDefaultResultOrder } from "dns";

interface IitemInput {
  id: string;
  price: number;
  itemName: string;
}

function ItemMain() {
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

  let item1 = new ItemDataModel("첫번째 아이디", "첫번째 아이템", 10000);

  const [data, setData] = useState<ItemDataModel[]>([
    item1,
    new ItemDataModel("두번째 아이디", "두번째 아이템", 20000),
    new ItemDataModel("세번째 아이디", "세번째 아이템", 30000),
  ]);

  const onCreate = () => {
    let item = new ItemDataModel(id, itemName, price);
    setData(prev => {
      return [...prev, item];
    });
  };

  return (
    <>
      <ItemList itemList={data} />
      <div className="form">
        <label className="title" htmlFor="product-name">
          제품명
        </label>
        <input
          type="text"
          name="productName"
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
