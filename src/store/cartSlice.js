import { makeAutoObservable } from "mobx";

function CartProduct(data) {
  this.name = data.name;
  this.color = data.color;
  this.size = data.size;
}

class CartSlice {
  cart = [];

  constructor() {
    makeAutoObservable(this);
  }

  addProductToCart() {

  }
}

export default new CartSlice()