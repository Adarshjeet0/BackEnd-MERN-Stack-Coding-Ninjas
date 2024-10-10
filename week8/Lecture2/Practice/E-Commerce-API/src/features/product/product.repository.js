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

    async rateProduct(){
        try {
            // 1. get database;
            const db = getDB();

            // 2. get collections
            const collection = db.collection(this.collection);
        } catch (error) {
            console.log(error);
            return new ApplicationError("Something went wrong with databases");
        }
    }




}