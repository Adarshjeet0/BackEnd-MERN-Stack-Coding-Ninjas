import UserController from './user.controller.js';
import express from 'express';

const userController = new UserController();
const userRouter = express.Router();

userRouter.post('/signup', (req, res)=>{
    userController.signUp(req, res)
});
userRouter.post('/signin', (req, res)=>{
    userController.signin(req, res)
});

export default userRouter;