// 1. Import express
import express from 'express';
import swagger from 'swagger-ui-express';
import cors from 'cors';
import productRouter from './src/features/product/product.routes.js';
import userRouter from './src/features/user/user.routes.js';
import bodyParser from 'body-parser';
// import basicAuthorizer from './src/middlewares/basicAuth.middleware.js';
import jwtAuth from './src/middlewares/jwt.middleware.js';

import cartRoute from './src/features/cart/cartRoutes.js';
import apiDocs from './swagger.json' assert {type:"json"};


// 2. Create Server
const server = express();

//parses application/json
server.use(bodyParser.json());

// for all requests related to product, redirect to product routes.
// localhost:3200/api/products
server.use(cors());
server.use('/api-docs', swagger.serve, swagger.setup(apiDocs));
server.use("/api/products",jwtAuth, productRouter);
server.use("/api/users", userRouter);
server.use("/api/cart",jwtAuth, cartRoute);

// 3. Default request handler
server.get('/', (req, res)=>{
    res.send("Welcome to Ecommerce APIs");
});

// 4. Specify port.
server.listen(3200,()=>{
    console.log("Server is running at 3200");
});

