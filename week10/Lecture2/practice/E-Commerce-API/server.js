// 1. Import express
import "./env.js";

import express from 'express';
import swagger from 'swagger-ui-express';
import cors from 'cors';
import productRouter from './src/features/product/product.routes.js';
import userRouter from './src/features/user/user.routes.js';
import orderRouter from './src/features/order/order.routes.js';
import bodyParser from 'body-parser';
// import basicAuthorizer from './src/middlewares/basicAuth.middleware.js';
import jwtAuth from './src/middlewares/jwt.middleware.js';

import cartRoute from './src/features/cart/cartRoutes.js';
import apiDocs from './swagger.json' assert {type:"json"};
import loggerMiddleware from './src/middlewares/logger.middleware.js';
import {ApplicationError} from './src/error-Handler/applicationError.js';
import {connectToMongoDB} from './src/config/mongodb.js';
import {connectUsingMongoose} from './src/config/mongooseConfig.js';
import mongoose from 'mongoose';
import likeRouter from './src/features/like/like.routes.js';


// 2. Create Server
const server = express();

//parses application/json
server.use(bodyParser.json());

// for all requests related to product, redirect to product routes.
// localhost:3200/api/products
server.use(cors());
server.use(loggerMiddleware);
server.use('/api-docs', swagger.serve, swagger.setup(apiDocs));
server.use("/api/products",jwtAuth, productRouter);
server.use("/api/users", userRouter);
server.use("/api/cart",jwtAuth, cartRoute);
server.use("/api/orders",jwtAuth, orderRouter);
server.use('/api/likes', jwtAuth, likeRouter)

server.use((err, req, res, next)=>{
    console.log(err);
    if(err instanceof mongoose.Error.ValidationError){
      return res.status(400).send(err.message);
    }

    if (err instanceof ApplicationError){
      res.status(err.status).send(err.message);
    }
  
    // server errors.
    res
    .status(500)
    .send(
      'Something went wrong, please try later'
      );
  });

// 3. Default request handler
server.get('/', (req, res)=>{
    res.send("Welcome to Ecommerce APIs");
});

// 4. Specify port.
server.listen(3200,()=>{
    console.log("Server is running at 3200");
    connectUsingMongoose();
});

