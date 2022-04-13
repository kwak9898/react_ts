import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./item.css";
import _ from "lodash";
import { useRecoilState } from "recoil";
import { itemListState } from "./itemListState";

function ItemEdit(): JSX.Element {
  const [itemList, setItemList] = useRecoilState(itemListState);
  let { id } = useParams();
  let navigate = useNavigate();
  let item = _.find(itemList, { id });

  return (
    <>
      <h2 className="align-center">제품 수정하기</h2>
      <div className="product-view-wrapper">
        {item ? (
          <>
            <div className="product-view-row">
              <label>제품</label>
              <input value={item.itemName} />
            </div>
            <div className="product-view-row">
              <label>제품 아이디</label>
              <input value={item.id} />
            </div>
            <div className="product-view-row">
              <label>가격</label>
              <input value={item.price} />
            </div>
          </>
        ) : (
          <div>해당 제품을 찾을 수 없습니다.</div>
        )}
        <button
          className="product-view-go-list-btn"
          onClick={() => navigate("/")}
        >
          목록으로 돌아가기
        </button>
        <button className="main-view-go-list-btn">저장</button>
      </div>
    </>
  );
}

export default ItemEdit;
