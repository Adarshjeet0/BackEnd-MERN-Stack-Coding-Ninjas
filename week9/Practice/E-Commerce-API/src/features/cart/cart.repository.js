import {ObjectId} from 'mongodb';
import {getDB} from '../../config/mongodb.js';
import { ApplicationError } from '../../error-Handler/applicationError.js';

export default class CartRepository{
    constructor(){
        this.collection = "cart";
    }

    async add(userId, productId, quantity){
        try {
            const db = getDB();
            const collection = db.collection(this.collection);
            // if product is already add into the cart then remove.
            await collection.deleteOne(
                {
                    userId: new ObjectId(userId),
                    productId: new ObjectId(productId)
                }
            );
            // Insert new product
            await collection.insertOne(
                {
                    userId:new ObjectId(userId),
                    productId: new ObjectId(productId),
                    quantity
                }
            )
            return {
                userId:new ObjectId(userId),
                productId: new ObjectId(productId),
                quantity
            };

        } catch (error) {
            console.log(error);
            throw new ApplicationError("Something went with database to product into the cart", 500);
        }
    }
    async update(userId, productId, quantity){
        try {
            const db = getDB();
            const collection = db.collection(this.collection);
            // if product is already add into the cart then remove.
            await collection.updateOne(
                {
                    userId: new ObjectId(userId),
                    productId: new ObjectId(productId)
                },
                {
                    $set:{
                        quantity: quantity
                    }
                }
            );
            
            return {
                userId:new ObjectId(userId),
                productId: new ObjectId(productId),
                quantity
            };

        } catch (error) {
            console.log(error);
            throw new ApplicationError("Something went with database to product into the cart", 500);
        }
    }

    async get(){
        try {
            const db = getDB();
            const collection = db.collection(this.collection);
            return await collection.find().toArray();
        } catch (error) {
            console.log(error);
            throw new ApplicationError("Something went wrong with databases to get the products", 500);
        }
    }

    async delete(userId, productId){
        try {
            const db = getDB();
            const collection = db.collection(this.collection);
            // if product is already add into the cart then remove.
            await collection.deleteOne(
                {
                    userId: new ObjectId(userId),
                    productId: new ObjectId(productId)
                }
            );
            // Insert new product
            
            // return {
            //     userId:new ObjectId(userId),
            //     productId: new ObjectId(productId),
            //     quantity
            // };

        } catch (error) {
            console.log(error);
            throw new ApplicationError("Something went with database to product into the cart", 500);
        }
    }
}