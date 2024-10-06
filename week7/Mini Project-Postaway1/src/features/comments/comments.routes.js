import express from 'express';
import CommentsController from './comments.controller.js';
import jwtAuth from '../../middlewares/jwt.middleware.js';

export const commentsRouter = express.Router();

commentsRouter.get('/:postId',jwtAuth, CommentsController.getComment);

commentsRouter.post('/:postId',jwtAuth, CommentsController.addComment);

commentsRouter.delete('/:commentId',jwtAuth, CommentsController.deleteComment);

commentsRouter.put('/:commentId',jwtAuth, CommentsController.updateComment);