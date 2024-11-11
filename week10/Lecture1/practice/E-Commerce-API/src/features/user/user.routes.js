import UserController from './user.controller.js';
import jwtAuth from '../../middlewares/jwt.middleware.js';
import express from 'express';

const userController = new UserController();
const userRouter = express.Router();

userRouter.post('/signup', (req, res,next)=>{
    userController.signUp(req, res,next)
});
userRouter.post('/signin', (req, res)=>{
    userController.signin(req, res)
});
userRouter.post('/resetPassword',jwtAuth, (req, res,next)=>{
    userController.resetPassword(req, res,next)
});

export default userRouter;