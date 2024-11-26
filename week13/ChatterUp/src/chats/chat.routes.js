import express from 'express';
import ChatController from './chat.controller.js';
export const chatRouter = express.Router();

const chatController = new ChatController();

chatRouter.post('/', (req, res)=>{
    chatController.addChat(req, res);
})

chatRouter.get('/', (req,res)=>{
    chatController.getChat(req, res);
})