import React, { useEffect, useRef, useState } from "react";
import ItemList from "./ItemList";
import "./item.css";
import ItemDataModel from "./ItemModel";
import { atom, useRecoilState } from "recoil";
import { itemListState } from "./itemListState";
import { useNavigate } from "react-router";

interface IitemInput {
  id: string;
  price: number;
  itemName: string;
}

function ItemCreate(): JSX.Element {
  const [itemList, setItemList] = useRecoilState(itemListState);
  const [input, setInput] = useState<IitemInput>({
    itemName: "",
    id: "",
    price: 0,
  });

  const navigate = useNavigate();

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
    navigate("/");
  };
  return (
    <>
      <h2 className="align-center">제품 상세정보</h2>
      <div className="product-view-wrapper">
        <div className="product-view-row">
          <label>제품 아이디</label>
          <input
            type="text"
            name="itemName"
            id="product-name"
            value={itemName}
            onChange={onChange}
          />
        </div>
        <div className="product-view-row">
          <label>제품명</label>
          <input
            type="text"
            name="id"
            id="product-id"
            value={id}
            onChange={onChange}
          />
        </div>
        <div className="product-view-row">
          <label>가격</label>
          <input
            type="text"
            name="price"
            id="product-price"
            value={price}
            onChange={onChange}
          />
        </div>
        <button
          className="product-view-go-list-btn"
          onClick={() => navigate("/")}
        >
          목록으로 돌아가기
        </button>
        <button className="main-view-go-list-btn" onClick={onCreate}>
          추가
        </button>
      </div>
    </>
  );
}

export default ItemCreate;
