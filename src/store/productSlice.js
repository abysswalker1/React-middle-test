import { makeAutoObservable, runInAction } from "mobx";
import { getProduct, getProductColor } from "../services/api";

class ProductSlice {
  currentProduct = {};
  currentColor = {};

  constructor() {
    makeAutoObservable(this);
  }

  getColorFromApi = (productID, colorID) => {
    getProductColor(productID, colorID).then(data => {
      runInAction(() => {
        this.currentColor = data;
      });
    });
  };

  getProductFromApi = (id) => {
    getProduct(id)
      .then(data => {
        runInAction(() => {
          this.currentProduct = data;
        })
      })
      .then(() => {
        this.getColorFromApi(id, 1);
      });
  };
};

export default new ProductSlice();