// make the necessary imports here
// implement the below schema

import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
    username: String,
    text:String,
    room: String,
    timestamp: Date
});

export const chatModel = mongoose.model("Chat", messageSchema);





// const mongoose = require('mongoose');

// const messageSchema = new mongoose.Schema({
//   username: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   text: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   room: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   timestamp: {
//     type: Date,
//     default: Date.now
//   }
// });

// export const ChatModel = mongoose.model('Chat', chatSchema);


