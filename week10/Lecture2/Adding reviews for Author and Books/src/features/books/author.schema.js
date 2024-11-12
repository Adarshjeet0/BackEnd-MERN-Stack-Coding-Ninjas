// import mongoose from 'mongoose';

// // complete the review field, allowing authors to have associated reviews.

// export const authorSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//         trim: true,
//     },
//     // Create an array of book ObjectIds to represent the many-to-many relationship with books
//     books: [{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Book',
//     }],
//     reviews: 
// });


import mongoose from 'mongoose';

export const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    // Array of book ObjectIds for the many-to-many relationship with books
    books: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
    }],
    // Array of review ObjectIds to store reviews associated with the author
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review',
    }],
});

const Author = mongoose.model('Author', authorSchema);
export default Author;
