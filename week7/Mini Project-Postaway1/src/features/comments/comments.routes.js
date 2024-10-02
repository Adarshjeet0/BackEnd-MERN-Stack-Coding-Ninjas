import express from 'express';
import CommentsController from './comments.controller.js';

export const commentsRouter = express.Router();

commentsRouter.get('/:postId', CommentsController.getComment);

commentsRouter.post('/:postId', CommentsController.addComment);

commentsRouter.delete('/:commentId', CommentsController.deleteComment);

commentsRouter.put('/:commentId', CommentsController.updateComment);