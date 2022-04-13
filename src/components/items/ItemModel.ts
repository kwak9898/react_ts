let count = 1;

export default class ItemDataModel {
  key: number;
  id: string;
  itemName: string;
  price: number;

  constructor(id: string, itemName: string, price: number) {
    this.key = count++;
    this.id = id;
    this.itemName = itemName;
    this.price = price;
  }
}
