import _ from "lodash";
import { atom, selector, selectorFamily } from "recoil";
import ItemDataModel from "./ItemModel";

export const itemListState = atom({
  key: "itemList",
  default: [
    new ItemDataModel("item01", "첫번째 아이템", 10000),
    new ItemDataModel("item02", "두번째 아이템", 20000),
    new ItemDataModel("item03", "세번째 아이템", 30000),
  ],
});
