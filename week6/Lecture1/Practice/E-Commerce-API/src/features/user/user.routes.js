import UserController from './user.controller.js';
import express from 'express';

const userController = new UserController();
const userRouter = express.Router();

userRouter.post('/signup', userController.signup);
userRouter.post('/signin', userController.signin);

export default userRouter;