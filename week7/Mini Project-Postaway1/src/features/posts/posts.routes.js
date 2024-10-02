import express from 'express';
import PostsController from './posts.controller.js';
export const postsRouter = express.Router();

postsRouter.get('/all', PostsController.getAll);

postsRouter.get('/:id', PostsController.getById);

// postsRouter.get('/:userSpecified', ()=>{});

postsRouter.post('/', PostsController.addPost);

postsRouter.delete('/:id', PostsController.delete);

postsRouter.put('/:id', PostsController.update);


