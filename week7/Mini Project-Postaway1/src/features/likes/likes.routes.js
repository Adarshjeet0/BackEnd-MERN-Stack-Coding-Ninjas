import express from 'express';
import LikeController from './likes.controller.js';
import jwtAuth from '../../middlewares/jwt.middleware.js';
export const likesRouter = express.Router();

likesRouter.get('/:postId',jwtAuth, LikeController.getAll);

likesRouter.get('/toggle/:postId',jwtAuth, LikeController.toggleLike);