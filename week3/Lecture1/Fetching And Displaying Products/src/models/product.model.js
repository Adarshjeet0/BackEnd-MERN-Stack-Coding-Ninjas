// Import the necessary modules here
import {products} from '../assets/products.js'
export default class ProductModel {
  fetchProducts = () => {
    // Write your code here
    return products;
  };
}

const productmodel = new ProductModel()
productmodel.fetchProducts
