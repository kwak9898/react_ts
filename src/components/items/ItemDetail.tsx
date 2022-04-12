import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./item.css";

function ItemView() {
  const [data, setData] = useState({});
  let { key } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
      setData(getItemkey(key))
  } [key])

  return (
      <>
      <h2 align="center">제품 상세정보</h2>
      <div className="product-view-wrapper">
          {data ? (
              <>
                <div className="product-view-row">
                    <label>제품 번호</label>
                    <label>{data.key}</label>
                </div>
                <div className="product-view-row">
                    <label>제품</label>
                    <label>{data.itemName}</label>
                </div>
                <div className="product-view-row">
                    <label>제품 아이디</label>
                    <label>{data.id}</label>
                </div>
                <div className="product-view-row">
                    <label>가격</label>
                    <label>{data.price}</label>
                </div>
              </>
          ) : (
              "해당 제품을 찾을 수 없습니다."
          )}
          <button className="product-view-go-list-btn"
            onClick={() => navigate(-1)}
          >
              목록으로 돌아가기
          </button>
      </div>
      </>
  )
}

export default ItemView;
