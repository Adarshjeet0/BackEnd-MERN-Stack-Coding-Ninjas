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
            const {name, price, sizes, category, desc} = req.body;
            const newProduct = {
                name,
                price: parseFloat(price),
                sizes: sizes.split(','),
                imageUrl: req.file.filename,
                category:category,
                desc:desc
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
            // console.log(req);
            const userId = req.userId;
            // console.log(userId);
            const {productId, rating} = req.body;
            // console.log(`${userId}, ${productId}, ${rating}`);
            
            await this.productRepository.rateProduct(userId,productId, rating);
            // console.log(res);
            res.status(200).send("Rating has been added");

        } catch (error) {
            // return res.status(404).send(error.message);
            console.log("Passing error to middleware");
            res.status(400).send("Somenting went wrong");
            // next(error);
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

    async filterProducts(req,res){
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


    async getAvgRating(req, res, next){
        try{
            const result = await this.productRepository.averageRatingPerProduct();
            console.log(result);
            res.status(200).send(result);
        }catch(err){
            console.log(err);
            return res.status(200).send("Something went wrong");
        }
    }

    async getRatingsPerProduct(req, res, next){
        try{
            const result = await this.productRepository.ratingsPerProduct();
            console.log(result);
            res.status(200).send(result);
        }catch(err){
            console.log(err);
            return res.status(200).send("Something went wrong");
        }
    }

}