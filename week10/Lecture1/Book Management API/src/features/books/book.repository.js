import mongoose from 'mongoose';
import { bookSchema } from './book.schema.js';
import {ObjectId} from 'mongodb';


const BookModel = mongoose.model('Book', bookSchema)

export default class BookRepository {


    // -----Change code in below functions only-----
    //book creation
    async createBook(bookData) {
        try {
            const newBookData = new BookModel(bookData);
            await newBookData.save();
            return newBookData;
        } catch (error) {
            console.log(error);
            throw new Error("Something went wrong!!!");
        }
    }

    //filtering the book by id
    async getOne(id) {
        try{
            return await BookModel.findOne({_id: new ObjectId(id)});
        }
        catch(err){
            console.log(err);
            throw new Error("Something went wrong");
        }
    }
}