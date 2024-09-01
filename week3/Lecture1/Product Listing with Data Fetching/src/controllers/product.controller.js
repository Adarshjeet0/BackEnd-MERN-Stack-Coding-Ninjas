// Please don't change the pre-written code
// Import the necessary modules here
import express from 'express'
import ProductModel from '../models/product.model.js'
import path  from "path";

export default class ProductController {
  getProducts = (req, res) => {
    // Write your code here
    let productModel = new ProductModel();
    let products = productModel.fetchProducts();
    res.render('product',{products:products});
  };
}
