import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import "./Form.css";

interface item {
  item: string;
}

interface Iitems {
  key: number;
  itemName: string;
  id: string;
  price: number;
}

interface IitemList {
  itemsList: Iitems[];
}

function ItemMain() {
  const [items, setItem] = useState<item>({
    item: "",
  });

  const [itemList, setItemList] = useState<Iitems>({
    key: 0,
    itemName: "",
    id: "",
    price: 0,
  });

  const [itemData, setItemData] = useState<IitemList>({
    itemsList: [itemList],
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setItemList({
      key: itemList.key + 1,
      itemName: items.item,
      id: items.item,
      price: itemList.price,
    });
  };

  useEffect(() => {
    setItem({
      item: "",
    });

    setItemData({
      itemsList: itemData.itemsList.concat(itemList),
    });
  }, [itemData]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setItem({
      item: value,
    });
  };

  const onDelete = (key: number) => {
    let temp2: Array<Iitems> = [];
    const deleteItemList = itemData.itemsList.map(data => {
      let temp1: Iitems = {
        key: data.key,
        itemName: data.itemName,
        id: data.id,
        price: data.price,
      };
      if (temp2.length < 1) {
        temp2 = [temp1];
      } else {
        temp2 = temp2.concat(temp1);
      }
      setItemData({
        itemsList: temp3,
      });
    });
  };

  const ItemList = itemData.itemsList.map((data, key) => {
    <React.Fragment key={key}>
      <ItemList
        key={data.key}
        itemName={data.itemName}
        id={data.id}
        price={data.price}
      />
    </React.Fragment>;
  });

  return (
    <div className="form">
      <form onSubmit={onSubmit}>
        <label className="title" htmlFor="item-name">
          제품명
        </label>
        <input
          type="text"
          name="itemName"
          id="item-name"
          value={item.item}
          onChange={handleInput}
        />
        <button type="submit">추가</button>
      </form>
      <div>{ItemList}</div>
    </div>
  );
}

export default ItemMain;
