import express from 'express';
import http from 'http';
import {Server} from 'socket.io';
import cors from 'cors';
import {MessageModel} from './message.schema.js';

export const app = express();
app.use(cors());

export const server = http.createServer(app);

const io = new Server(server, {
    cors:{
        origin: '*',
        methods:["GET","POST"]
    }
});

io.on("connection", (socket)=>{
    console.log("Connection made");

    // socket.on()
    socket.on("newMessage", async (data)=>{
        console.log(data);
        const newMessage = new MessageModel({
            username: data.username,
            room: data.room,
            message: data.message,
            timestamp: new Date()
        })
        await newMessage.save()
        io.emit("message",data);
    });

    socket.on("joined",(data)=>{
        console.log(data);
        socket.emit("userjoined",{text:`Welcome, ${data.username}`});
        MessageModel.find().sort({ timestamp: 1 }).limit(50)
            .then(messages => {
                socket.emit('load_message', messages);
            }).catch(err => {
                console.log(err);
            })
        socket.broadcast.to(data.room).emit('userjoined', {text: `${data.username} has joined!`});

        socket.join(data.room);
    })

    socket.on("disconnect",()=>{
        console.log("Connection disconnected");
    })
})

