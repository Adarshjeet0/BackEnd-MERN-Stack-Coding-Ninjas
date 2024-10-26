import {ObjectId} from 'mongodb';
import {getDB} from '../../config/mongodb.js';
import { ApplicationError } from '../../error-Handler/applicationError.js';
export default class ProjectRepository{
    constructor(){
        this.collection = "products";
    }

    async getAll(){
        try {
            // 1. get database;
            const db = getDB();
            // 2. get collections
            const collection = db.collection(this.collection);
            return await collection.find().toArray();
        } catch (error) {
            console.log(error);
            return new ApplicationError("Something went wrong with databases");
        }
    }

    async get(id){
        try {
            // 1. get database;
            const db = getDB();
            // 2. get collections
            const collection = db.collection(this.collection);
            const result =  await collection.findOne({_id: new ObjectId(id)});

            return result;

        } catch (error) {
            console.log(error);
            return new ApplicationError("Something went wrong with databases");
        }
    }

    async add(newProduct){
        try {
            // 1. get database;
            const db = getDB();

            // 2. get collections
            const collection = db.collection(this.collection);
            // 3. insert new product
            await collection.insertOne(newProduct);
            return newProduct;
        } catch (error) {
            console.log(error);
            return new ApplicationError("Something went wrong with databases");
        }
    }

    async rateProduct(userId, productId, rating){
        // console.log(`${userId}, ${productId}, ${rating}`);
        try{
            const db = getDB();
            const collection = db.collection(this.collection);

             //If rating is already exist then remove it
             await collection.updateOne(
                {
                    _id:new ObjectId(productId)
                },
                {
                    $pull: {ratings: {userID:new ObjectId(userId)}}
                }
            )

            await collection.insertOne(
                {
                    _id:new ObjectId(productId)
                },
                {
                    $pull: {ratings: {userID:new ObjectId(userId)}}
                }
            )

            //Insert Rating
            await collection.updateOne(
                {
                    _id:new ObjectId(productId)
                },
                {
                    $push: {ratings: {userID:new ObjectId(userId), rating}}
                })

        }catch(error){
            console.log(error);
            throw new ApplicationError("Something went wrong with database", 500);
        }
    }

    async filterProducts(minPrice, maxPrice, category){
        try{
            const db = getDB();
            const collection = db.collection(this.collection);
            let filterExpression={};
            if(minPrice){
                filterExpression.price = {$gte: parseFloat(minPrice)}
            }
            if(maxPrice){
                filterExpression.price = {...filterExpression.price, $lte: parseFloat(maxPrice)}
            }
            if(category){
                filterExpression.category=category;
            }
            return await collection.find(filterExpression).toArray();
            
        }catch(error){
            console.log(error);
            throw new ApplicationError("Something went wrong with database", 500);
        }
    }




    async averageProductPricePerCategory(){
        try{
            const db=getDB();
            return await db.collection(this.collection)
                .aggregate([
                    {
                        // Stage 1: Get Vaerge price per category
                        $group:{
                            _id:"$category",
                            averagePrice:{$avg:"$price"}
                        }
                    }
                ]).toArray();
        }catch(err){
            console.log(err);
            throw new ApplicationError("Something went wrong with database", 500);    
        }
    }




}