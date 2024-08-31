//import express library
import ProductModel from '../models/product.model.js';
import express from 'express'
import path  from "path";

export default class ProductController{
    getProduct(req,res){
        console.log(ProductModel.get());
        res.sendFile(path.join(path.resolve(),"src","views","product.html"))
    }
}
// console.log("This is path: "+path.join('src','controllers','product.controller.js'));