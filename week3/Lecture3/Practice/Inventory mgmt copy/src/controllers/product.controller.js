//import express library
import ProductModel from '../models/product.model.js';
import express from 'express'
import path  from "path";

export default class ProductController{
    getProduct(req,res){
        let products = ProductModel.get();
        res.render('product',{products:products});
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
        const { name, desc, price } = req.body;
        const imageUrl =
        'images/' + req.file.filename;
        const obj = {
            "name":name,
            "desc":desc,
            "price":price,
            "imageUrl":imageUrl
        }
        ProductModel.add(obj);
        let products = ProductModel.get();
        res.render('product',{products:products})
    }

    updateProduct(req,res,next){
        const id = req.params.id;
        // console.log(id);
        const productFound = ProductModel.getById(id);
        // console.log(productFound);
        if(productFound){
            let data = productFound
            res.render('update-products',{errors:false, product:productFound});
        }else{
            res.status(401).send("Product not found");
        }
    }

    postUpdateProducts(req,res,next){
        ProductModel.update(req.body);
        res.render('product',{products:ProductModel.get()});
    }

    deleteProduct(req,res){
        const id = req.params.id;
        const productFound = ProductModel.getById(id);
        if(!productFound){
            return res.status(401).send("Product Not found");
        }
        ProductModel.delete(id);
        // let products = ProductModel.get();
        res.render('product',{products:ProductModel.get()});
        // res.render('product',{products:ProductModel.get()});
    }

    
}
// console.log("This is path: "+path.join('src','controllers','product.controller.js'));