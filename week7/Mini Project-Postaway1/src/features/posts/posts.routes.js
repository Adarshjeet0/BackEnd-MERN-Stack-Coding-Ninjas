import express from 'express';
import PostsController from './posts.controller.js';
import {upload} from '../../middlewares/fileUpload.middleware.js';
import jwtAuth from '../../middlewares/jwt.middleware.js';
export const postsRouter = express.Router();

postsRouter.get('/all',jwtAuth, PostsController.getAll);

postsRouter.get('/:id',jwtAuth, PostsController.getById);

// postsRouter.get('/:userSpecified', ()=>{});

postsRouter.post('/',jwtAuth, upload.single('imageUrl'), PostsController.addPost);

postsRouter.delete('/:id',jwtAuth, PostsController.delete);

postsRouter.put('/:id',jwtAuth,upload.single('imageUrl'), PostsController.update);


