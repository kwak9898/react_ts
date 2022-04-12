import React, { useState } from "react";
import ItemList from "./ItemList";
import "./Form.css";

interface Iprops {
  key: number;
  itemName: string;
  id: string;
  price: number;
  onCreate: Function;
}

interface Iinput {
  itemName: string;
  id: string;
  price: number;
}

function ItemMain({ itemName, id, price, onCreate }: Iprops) {
  const [input, setInput] = useState<Iinput>({
    itemName: "",
    id: "",
    price: 0,
  });

  return (
    <div className="form">
      <label className="title" htmlFor="item-name">
        제품명
      </label>
      <input
        type="text"
        name="itemName"
        id="item-name"
        value={itemName}
        onChange={onChange}
      />
    </div>
  );
}

export default ItemMain;
