import express from 'express';
import LikeController from './likes.controller.js';
import jwtAuth from '../../middlewares/jwt.middleware.js';
export const likesRouter = express.Router();


//--------------------Old Likes routes-----------------------------
// likesRouter.get('/:postId',jwtAuth, LikeController.getAll);

// likesRouter.get('/toggle/:postId',jwtAuth, LikeController.toggleLike);


//---------------------New likes routes-----------------------------
likesRouter.get('/:id', (req, res)=>{
    likeController.getById(req, res)
})
likesRouter.get('/toggle/:id', (req, res)=>{
    likeController.getById(req, res)
})