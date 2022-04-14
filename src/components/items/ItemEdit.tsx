import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./item.css";
import _ from "lodash";
import { useRecoilState } from "recoil";
import { itemListState } from "./itemListState";
import { useParams } from "react-router";

function ItemEdit() {
  const [itemList, setItemList] = useRecoilState(itemListState);
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(_.find(itemList, { id })!);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setItem(prevItem => ({
      ...prevItem,
      [name]: value,
    }));
  };

  const onSave = () => {
    let list = _.cloneDeep(itemList);
    let index = _.findIndex(list, { id });
    list[index] = item;
    setItemList(list);
    navigate("/");
  };

  return (
    <>
      <h2 className="align-center">제품 수정하기</h2>
      <div className="product-view-wrapper">
        {item ? (
          <>
            <div className="product-view-row">
              <label>제품</label>
              <input
                name="itemName"
                value={item.itemName}
                onChange={onChange}
              />
            </div>
            <div className="product-view-row">
              <label>제품 아이디</label>
              <input name="id" value={item.id} onChange={onChange} />
            </div>
            <div className="product-view-row">
              <label>가격</label>
              <input name="price" value={item.price} onChange={onChange} />
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
        <button className="main-view-go-list-btn" onClick={onSave}>
          저장
        </button>
      </div>
    </>
  );
}

export default ItemEdit;
