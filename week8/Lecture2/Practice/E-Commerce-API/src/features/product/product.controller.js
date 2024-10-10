import ProductModel from "./product.model.js";
import ProductRepository from './product.repository.js';


export default class ProductController{
    constructor(){
        this.productRepository = new ProductRepository();
    }

    async getAllProducts(req,res){
        try {
            const products = await this.productRepository.getAll();
            res.status(200).send(products);
        } catch (error) {
            console.log(error);
            res.status(400).send("Something went wrong");
        }
    }

    async addProduct(req, res){
        try {
            const {name, price, sizes} = req.body;
            const newProduct = {
                name,
                price: parseFloat(price),
                sizes: sizes.split(','),
                imageUrl: req.file.filename,
            };
            // console.log(newProduct);
            const product = await this.productRepository.add(newProduct);
            res.status(200).send(product); 
        } catch (error) {
            console.log(error);
            res.status(400).send("Something went wrong");
        }
    }

    async rateProduct(req,res,next){
        try {
            const userId = req.userId;
            const {productId, rating} = req.query;
            productRepository.rateProduct(userId,productId, rating);
            res.status(200).send("Rating is added");

        } catch (error) {
            // return res.status(404).send(error.message);
            console.log("Passing error to middleware");
            next(error);
        }
        
    }

    async getOneProduct(req,res){
        try {
            const id = req.params.id;
            const product = await this.productRepository.get(id);
            res.status(200).send(product);
        }catch (error) {
            console.log(error);
            res.status(400).send("Something went wrong");
        }

    }

    async getfilteredProducts(req,res){
        try {
            console.log(req.query);
            const {minPrice, maxPrice, category} = req.query;
        
            const products = await this.productRepository.filterProducts(minPrice,maxPrice,category);
            res.status(200).send(products);
        }catch (error) {
            console.log(error);
            res.status(400).send("Something went wrong");
        }
    }

}