// Please don't change the pre-written code
// Import the necessary modules here
// Write your code here

import { fetchAllProducts, rateProductModel } from "../model/product.model.js";

export const getAllProducts = (req, res, next) => {
  const products = fetchAllProducts();
  res.json({ success: true, products });
};
export const getOneProduct = (req, res, next) => {
  res.json({ success: true, msg: "getOneProduct working" });
};
export const addProduct = (req, res, next) => {
  res.json({ success: true, msg: "addProduct working" });
};
export const rateProduct = (req, res, next) => {
  // Write your code here
  const {productId, userId, rating} = req.query;
  const error = rateProductModel(productId, userId, rating);
  console.log(error);
  if(error){
    res.json({success: false, msg: error});
  }else{
    res.json({success: true, msg: "Product rated successfully"});
  }
  
};
