// No need to change the pre-written code
// Implement the features in io.on() section
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';

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

    // Write your code here
    // Handle user joining a room
    socket.on("joinRoom", ({ username, room }) => {
        socket.join(room); // Join the specified room
        console.log(`${username} joined room: ${room}`);

        // Welcome the user to the room
        socket.emit("welcomeMessage", `Welcome to the chat, ${username}!`);

        // Notify others in the room about the new user
        socket.to(room).emit("notification", `${username} has joined the chat.`);
        socket.username = username;

        // Add custom behavior if needed (e.g., tracking users in a room)
    });

    // Handle user sending a message
    socket.on("chatMessage", (message) => {
        const rooms = Array.from(socket.rooms); // Get the rooms the user is in
        if (rooms.length > 1) {
            const room = rooms[1]; // The first room is the user's private socket room
            const username = socket.username || "Anonymous"; // Use a fallback username if not set

            // Broadcast the message to everyone in the room
            io.to(room).emit("message", { username, text: message });
        }
    });

    // Handle user disconnecting
    socket.on("disconnect", () => {
        const rooms = Array.from(socket.rooms);
        if (rooms.length > 1) {
            const room = rooms[1];
            const username = socket.username || "A user";

            // Notify others in the room that the user has left
            socket.to(room).emit("notification", `${username} has left the chat.`);
        }

        console.log("Connection disconnected.");
    });


    // socket.on("disconnect", () => {
    //     console.log("Connection disconnected.");
    // });
});

export {server};

