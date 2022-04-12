import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ItemData from "./ItemData";

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

function ProductList(props: Iprops) {
  const [dataList, setDataList] = useState<Istate>({
    key: 1,
    id: "첫번째 아이디",
    itemName: "첫번째 제품",
    price: 10000,
  });

  useEffect(() => {
    setDataList(dataList);
  }, [dataList]);

  return;
}

export default ProductList;
