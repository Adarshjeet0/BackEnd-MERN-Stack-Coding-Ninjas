// Please don't change the pre-written code
// Import the necessary modules here

import ProductModel from "../models/ProductModel.js";

const productModel = new ProductModel();
export default class productController {
  index = (req, res) => {
    res.render("index", { products: productModel.getAllProducts() });
  };

  search = (req, res) => {
    // Write your code here
    const searchQuery = req.body.name;
    const products = productModel.searchResult(searchQuery);
    res.render('searchResults',{products});
    // console.log(searchQuery);
    // res.send('Recevied');
  };
}
