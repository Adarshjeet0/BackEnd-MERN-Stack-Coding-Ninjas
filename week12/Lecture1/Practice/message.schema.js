import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
    username: String,
    message:String,
    room: String,
    timestamp: Date
});

export const MessageModel = mongoose.model("Chat", messageSchema);