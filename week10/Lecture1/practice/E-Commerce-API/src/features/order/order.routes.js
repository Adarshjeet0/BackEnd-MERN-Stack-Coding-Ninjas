import express from 'express';
import OrderController from './order.controller.js';

// 2. Initialize Express router.
const orderRouter = express.Router();
const orderController = new OrderController();

// All the paths to the controller methods.
// localhost/api/products 
orderRouter.post('/', (req, res,next)=>{
    orderController.placeOrder(req, res,next);
});




export default orderRouter;