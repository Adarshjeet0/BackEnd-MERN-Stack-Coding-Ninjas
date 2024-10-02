import express from 'express';
import UserController from './user.controller.js';

export const userRouter = express.Router();

userRouter.post('/signup', UserController.signup);

userRouter.post('/signin', UserController.signin);

