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
        console.log(ProductModel.get());
        return res.render('add-item',{errors:null})
        // res.sendFile(path.join(path.resolve(),"src","views","product.html"))
    }
    addNewProduct(req,res){
        // let product = ;
        console.log(req.body);
        const {name,desc,price, imageUrl} = req.body;
        let errors = [];
        if(!name || name.trim() == ''){
            errors.push("Please enter correct name");
            // return res.render('add-item', {errors:errors});
        }
        if(!desc || desc.trim() == ''){
            errors.push("Please enter valid discription");
            // return res.render('add-item', {errors:errors});
        }
        if(!price|| price<0 || price.trim() == ''){
            errors.push("Please enter correct price");
            // return res.render('add-item', {errors:errors});
        }
        try {
            const validURL = new URL(imageUrl);
        } catch (err) {
            errors.push("Invalid URL");
        }
        if(errors.length > 0){
            return res.render('add-item',{errors:errors[0]});
        }
        ProductModel.add(req.body);
        let products = ProductModel.get();
        res.render('product',{products:products})
    }
}
// console.log("This is path: "+path.join('src','controllers','product.controller.js'));