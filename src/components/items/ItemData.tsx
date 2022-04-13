interface Idata {
  key: number;
  id: string;
  itemName: string;
  price: number;
}

const ItemData: Idata[] = [
  {
    key: 1,
    id: "첫번째 아이디",
    itemName: "첫번째 아이템",
    price: 10000,
  },
  {
    key: 2,
    id: "두번째 아이디",
    itemName: "두번째 아이템",
    price: 20000,
  },
  {
    key: 3,
    id: "세번째 아이디",
    itemName: "세번째 아이템",
    price: 30000,
  },
];

const getItemkey = (key: Idata["key"]) => {
  const array = ItemData.filter(x => {
    x.key === key;
  });
  if (array.length === 1) {
    return array[0];
  } else {
    return null;
  }
};

export default {
  ItemData,
  getItemkey,
};
