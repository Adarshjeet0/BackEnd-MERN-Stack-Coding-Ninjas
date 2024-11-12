// Make necessary imports here.
// Don't change the pre-written code.

import mongoose from 'mongoose';
import { bookSchema } from './book.schema.js'
import { reviewSchema } from './review.schema.js';
import { authorSchema} from './author.schema.js';

// creating model from schema.
const booksModel = mongoose.model('Book', bookSchema);
const authorModel = mongoose.model('Author',authorSchema);

// creating model for review.
const reviewModel = mongoose.model('Review', reviewSchema);


export default class BookRepository {
    async createBook(bookData) {
        const book = new booksModel(bookData);
        const savedBook = await book.save();
        return savedBook;
    }

    async addReviewToBook(bookId, text, rating) {
        const reviewData = {
            text,
            rating,
            book: new mongoose.Types.ObjectId(bookId)
        }
        const review = new reviewModel(reviewData);
        const savedReview = await review.save();

        const book = await booksModel.findById(bookId);

        book.reviews.push(savedReview._id);

        await book.save();

        return savedReview;

    }

    async getOne(id) {
        const book = await booksModel.findById(id);
        return book;
    }

    async listBooksByGenre(genre) {
        const books = await booksModel.find({ genre });
        return books;
    }

    async updateBookAvailability(bookId, quantity) {

        console.log(bookId);
        const book = await booksModel.findById(bookId);

        // Calculate the new availableCopies value
        const newAvailableCopies = book.availableCopies + quantity;

        // Update the availableCopies field and save the book
        book.availableCopies = newAvailableCopies;

        await book.save();
        return book;
    }

    async deleteBookById(bookId) {
        const deletedBook = await booksModel.findByIdAndRemove(bookId);
        return deletedBook;
    }

    // Complete the following four funtions.
    async createAuthor(authorData) { 
        const newAuthor = new authorModel(authorData);
        const result = await newAuthor.save();
        return result;
    }

    // async addAuthorToBook(bookId, authorId) { 
    // }
    async addAuthorToBook(bookId, authorId) { 
        try {
            // Add the authorId to the book's authors array
            const updatedBook = await booksModel.findByIdAndUpdate(
                bookId,
                { $addToSet: { authors: authorId } }, // Avoid duplicate author IDs
                { new: true } // Returns the updated book document
            ); // Populate to get author details
    
            if (!updatedBook) {
                throw new Error('Book not found');
            }
    
            // Add the bookId to the author's books array
            const updatedAuthor = await authorModel.findByIdAndUpdate(
                authorId,
                { $addToSet: { books: bookId } }, // Avoid duplicate book IDs
                { new: true } // Returns the updated author document
            );
    
            if (!updatedAuthor) {
                throw new Error('Author not found');
            }
    
            // Return both the updated book and the updated author
            return { book: updatedBook, author: updatedAuthor };
        } catch (error) {
            throw new Error(`Error adding author to book: ${error.message}`);
        }
    }

    // async listAuthorsByBook(bookId) { }
    async listAuthorsByBook(bookId) {
        try {
            // Find the book by its ID and populate the authors array
            const book = await booksModel.findById(bookId).populate('authors');
    
            // Check if the book exists
            if (!book) {
                throw new Error('Book not found');
            }
    
            // Return the list of authors associated with the book
            return book.authors;
        } catch (error) {
            throw new Error(`Error retrieving authors for book: ${error.message}`);
        }
    }

    // async listBooksByAuthor(authorId) { }
    async listBooksByAuthor(authorId) {
        try {
            // Find the author by its ID and populate the books array
            const author = await authorModel.findById(authorId).populate('books');
    
            // Check if the author exists
            if (!author) {
                throw new Error('Author not found');
            }
    
            // Return the list of books written by the author
            return author.books;
        } catch (error) {
            throw new Error(`Error retrieving books for author: ${error.message}`);
        }
    }
}