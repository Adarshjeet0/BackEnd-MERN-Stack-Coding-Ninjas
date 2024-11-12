// // make necessary imports here

// // write your code here
// export const reviewSchema = 

import mongoose from 'mongoose';

// Define the Review Schema
export const reviewSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    target: {
        type: String,
        enum: ["Author", "Book"],
        required: true,
    },
    targetId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        refPath: "target", // Dynamically references either Author or Book based on target value
    },
});

