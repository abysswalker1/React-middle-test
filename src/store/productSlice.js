import { makeAutoObservable, runInAction } from "mobx";
import { getProduct, getProductColor } from "../services/api";

class ProductSlice {
  currentProduct = null;

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
  };
};

export default new ProductSlice();