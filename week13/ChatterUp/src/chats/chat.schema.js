import mongoose from 'mongoose';

const chatSchema = new mongoose.Schema({
    userName: {
        type:String,
    },
    message:{
        type:String,
    }

},
{
    timestamps:true
});

export const ChatModel = mongoose.model('Chat', chatSchema);