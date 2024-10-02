import express from 'express';
import bodyParser from 'body-parser';
import {userRouter} from './src/features/users/user.routes.js';
import {postsRouter} from './src/features/posts/posts.routes.js';
import {likesRouter} from './src/features/likes/likes.routes.js';
import {commentsRouter} from './src/features/comments/comments.routes.js';

const app = express();

app.use(bodyParser.json());
app.use('/api', userRouter);
app.use('/api/posts', postsRouter);
app.use('/api/comments', commentsRouter);
app.use('/api/likes', likesRouter);
app.get('/', (req, res)=>{
    res.send("Welcome to My new Project: Postaway");
});


export {app};