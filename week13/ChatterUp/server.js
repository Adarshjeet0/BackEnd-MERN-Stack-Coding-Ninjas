// No need to change the pre-written code
// Implement the features in io.on() section
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import {ChatModel} from './src/chats/chat.schema.js';

export const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ["GET", "POST"]
    }
});

io.on("connection", (socket) => {
    console.log("Connection made.");

    socket.on("newUser", (userName)=>{
        socket.emit("welcomMessage", `Welcome ${userName.username}`);
        socket.emit("addUser",userName);
        socket.broadcast.emit("addUser",userName);
        ChatModel.find().sort({timestamps: 1})
            .then(messages =>{
                socket.emit("load_message", messages);
            })
            .catch(error=>{
                console.log(error);
            })
    })

    socket.on("message", async (data)=>{
        // console.log("clicked");
        
        const newChat = await ChatModel(data);
        newChat.save();
        socket.emit("newMessage", data);
        socket.broadcast.emit("newMessageOtherUser", data);
    })

    

    // Handle user disconnecting
    socket.on("disconnect", () => {

        console.log("Connection disconnected.");
    });


    // socket.on("disconnect", () => {
    //     console.log("Connection disconnected.");
    // });
});

export {server};

