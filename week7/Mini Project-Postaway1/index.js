import express from 'express';
import swagger from 'swagger-ui-express';
import bodyParser from 'body-parser';
import {userRouter} from './src/features/users/user.routes.js';
import {postsRouter} from './src/features/posts/posts.routes.js';
import {likesRouter} from './src/features/likes/likes.routes.js';
import {commentsRouter} from './src/features/comments/comments.routes.js';
import apiDocs from './swagger.json' assert {type:"json"};
import loggerMiddleware from './src/middlewares/logger.middleware.js';
import {ApplicationError} from './src/error-Handler/applicationError.js';

const app = express();

app.use(bodyParser.json());
app.use(loggerMiddleware);
app.use('/api-docs', swagger.serve, swagger.setup(apiDocs));
app.use('/api', userRouter);
app.use('/api/posts', postsRouter);
app.use('/api/comments', commentsRouter);
app.use('/api/likes', likesRouter);

app.use((err, req, res, next)=>{
    console.log(err);
    if (err instanceof ApplicationError){
      return res.status(err.status).send(err.message);
    }
  
    // server errors.
    res
    .status(500)
    .send(
      'Something went wrong, please try later'
      );
  });

app.get('/', (req, res)=>{
    res.send("Welcome to My new Project: Postaway");
});


export {app};