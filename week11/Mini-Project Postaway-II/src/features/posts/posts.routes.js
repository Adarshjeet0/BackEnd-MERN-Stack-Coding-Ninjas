import express from 'express';
import PostsController from './posts.controller.js';
import {upload} from '../../middlewares/fileUpload.middleware.js';
import jwtAuth from '../../middlewares/jwt.middleware.js';
export const postsRouter = express.Router();

const postController = new PostsController();

// -----------------------Old routes----------------------

// postsRouter.get('/all',jwtAuth, PostsController.getAll);

// postsRouter.get('/:postId',jwtAuth, PostsController.getById);

// // postsRouter.get('/:userSpecified', ()=>{});

// postsRouter.post('/',jwtAuth, upload.single('imageUrl'), PostsController.addPost);

// postsRouter.post('/filter',jwtAuth, PostsController.filterPosts);

// postsRouter.delete('/:postId',jwtAuth, PostsController.delete);

// postsRouter.put('/:postId',jwtAuth,upload.single('imageUrl'), PostsController.update);

//--------------------------New Routes-----------------------
postsRouter.post('/', jwtAuth, upload.single('imageUrl'), (req, res, next)=>{
    postController.createPost(req, res, next);
})


