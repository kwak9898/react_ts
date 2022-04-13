let count = 1;

export default class ItemDataModel {
  readonly key: number;
  readonly id: string;
  readonly itemName: string;
  readonly price: number;

  constructor(id: string, itemName: string, price: number) {
    this.key = count++;
    this.id = id;
    this.itemName = itemName;
    this.price = price;
  }
}
