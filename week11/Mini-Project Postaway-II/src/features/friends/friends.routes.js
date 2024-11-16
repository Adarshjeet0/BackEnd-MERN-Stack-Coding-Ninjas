import express from 'express';
import FriendController from './friends.controller.js';

const friendRouter = express.Router();
cosnt friendController = new FriendController();

friendRouter.get('/get-friends/:userId',(req, res)=>{})
friendRouter.get('/get-pending-requests',(req, res)=>{})
friendRouter.post('/toggle-friendship/:friendId',(req, res)=>{})
friendRouter.post('/response-to-request/:friendId',(req, res)=>{})

