export default class ItemDataModel {
  id: string;
  itemName: string;
  price: number;

  constructor(id: string, itemName: string, price: number) {
    this.id = id;
    this.itemName = itemName;
    this.price = price;
  }
}
