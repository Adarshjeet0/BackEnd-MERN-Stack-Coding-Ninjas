import mongoose from 'mongoose';
import BookRepository from "./book.repository.js";

export default class BookController {
    constructor() {
        this.bookRepository = new BookRepository();
    }

    //------change code in below functions only--------

    // creation of book
    createBook = async (req, res) => {
        try {
            const {title, author, genre, copies, availableCopies} = req.body;
            const newBook = {
                title,
                author,
                genre,
                copies,
                availableCopies
            }
            const result = await this.bookRepository.createBook(newBook);
            res.status(201).send(result);
        } catch (error) {
            console.log(error);
            throw new Error("Something went wrong");
        }

    }

    // filtering of book by id
    getOne = async (req, res) => { 
        const bookId = req.params.bookId;
        const result = await this.bookRepository.getOne(bookId);
        if(!result){
            return res.status(404).send("Book not found");
        }
        return res.status(200).send(result);
    }

}
