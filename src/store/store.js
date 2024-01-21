import { runInAction, makeAutoObservable } from "mobx";
import { getProducts, getProduct, getSizes } from "../services/api";

class Store {
  products = [];
  sizes = [];
  
  constructor() {
    makeAutoObservable(this)
  }

  toggleIsFetching = (value) => {
    this.isFetching = value 
  }

  fetchProductsFromApi = () => {
    getProducts().then((data) => {
      runInAction(() => {
        this.products = data
      })
    }).then(() => {
      getSizes().then(data => {
        this.sizes = data
      });
    })
  }

}

export default new Store()