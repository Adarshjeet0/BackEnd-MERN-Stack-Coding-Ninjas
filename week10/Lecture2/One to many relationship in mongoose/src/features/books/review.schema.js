// Please don't change the pre-written code
// Import the necessary modules here(if required)

import mongoose from 'mongoose';

export const reviewSchema = new mongoose.Schema({
  // Write your code here
  text: {
    type: String,
    required: [true, 'Review text is required'],
    trim: true,
  },
  rating: {
    type: Number,
    required: [true, 'Review rating is required'],
    min: [1, 'Rating must be at least 1'],
    max: [5, 'Rating must be at most 5'],
  },
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Books',
    required: true,
  }
});
