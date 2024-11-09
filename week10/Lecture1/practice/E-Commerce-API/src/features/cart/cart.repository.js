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
            const id = await this.getNextCounter(db);
            console.log(id);
            
            await collection.updateOne(
                {
                    userId:new ObjectId(userId),
                    productId: new ObjectId(productId)
                },
                {
                    $setOnInsert: {_id:id},
                    $inc:{
                        quantity:quantity
                    }
                },{
                    upsert:true
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

    async delete(userId, cartItemId){
        try {
            const db = getDB();
            const collection = db.collection(this.collection);
            // if product is already add into the cart then remove.
            await collection.deleteOne(
                {
                    userId: new ObjectId(userId),
                    productId: new ObjectId(cartItemId)
                }
            );

        } catch (error) {
            console.log(error);
            throw new ApplicationError("Something went with database to product into the cart", 500);
        }
    }

    async getNextCounter(db){

        const resultDocument = await db.collection("counters").findOneAndUpdate(
            {_id:'cartItemId'},
            {$inc:{value: 1}},
            {returnDocument:'after'}
        )  
        console.log(resultDocument);
        return resultDocument.value;
    }
}