import ProductModel from "./product.model.js";

export default class ProductController{

    getAllProducts(req,res){
        const products = ProductModel.GetAll();
        res.status(200).send(products);
    }

    addProduct(req, res){
        const {name, price, sizes} = req.body;
        // console.log(req.body);
        const newProduct = {
            name,
            price: parseFloat(price),
            sizes: sizes.split(','),
            imageUrl: req.file.filename,
        };
        const createdRecord = ProductModel.add(newProduct);
        res.status(201).send(createdRecord); 
        // console.log(req.body);
        // console.log("Post request is recevied");
        // res.status(200).send("Post request is done");
    }

    rateProduct(req,res){
        const {userId, productId, rating} = req.query;
        const error = ProductModel.rateProduct(userId,productId, rating);
        if(error){
            return res.status(404).send(error);
        }
        res.status(200).send("Rating is added");
    }

    getOneProduct(req,res){
        const id = req.params.id;
        const product = ProductModel.get(id);
        if(product){
            return res.status(201).send(product);
        }else{
            return res.status(404).send("Product Not found");
        }
    }

    getfilteredProducts(req,res){
        console.log(req.query);
        const {minPrice, maxPrice, category} = req.query;
        const products = ProductModel.getFilteredProducts(minPrice,maxPrice,category);
        res.status(200).send(products);
    }

}