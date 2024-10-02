import express from 'express';

export const likesRouter = express.Router();

likesRouter.get('/:postId', ()=>{});

likesRouter.get('/toggle/:postId', ()=>{});