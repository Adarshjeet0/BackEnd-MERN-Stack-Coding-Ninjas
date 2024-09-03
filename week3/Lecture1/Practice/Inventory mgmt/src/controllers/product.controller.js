//import express library
import ProductModel from '../models/product.model.js';
import express from 'express'
import path  from "path";

export default class ProductController{
    getProduct(req,res){
        let products = ProductModel.get();
        res.render('product',{products:products})
        // console.log(ProductModel.get());
        // res.sendFile(path.join(path.resolve(),"src","views","product.html"))
    }
    getaddItemForm(req,res){
        // let products = ProductModel.get();
        return res.render('add-item',)
        console.log(ProductModel.get());
        // res.sendFile(path.join(path.resolve(),"src","views","product.html"))
    }
    addNewProduct(req,res){
        // let product = ;
        console.log(req.body);
        ProductModel.add(req.body);
        let products = ProductModel.get();
        res.render('product',{products:products})
    }
}
// console.log("This is path: "+path.join('src','controllers','product.controller.js'));