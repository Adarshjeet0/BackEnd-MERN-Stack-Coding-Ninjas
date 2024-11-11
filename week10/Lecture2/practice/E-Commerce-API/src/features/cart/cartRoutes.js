// import CartController from './cartItem.controller.js';
// import express from 'express';

// const cartRouter = express.Router();
// cartRouter.get('/',CartController.getAll);
// cartRouter.post('/', CartController.add);
// cartRouter.post('/delete', CartController.delete);


// export default cartRouter;


import express from "express";
import CartController from "./cartItem.controller.js";
import jwtAuth from "../../middlewares/jwt.middleware.js";

const router = express.Router();
const cartController = new CartController();
router.route("/").post(jwtAuth, (req, res)=>{
  cartController.addToCart(req, res);
});
router.route("/").put(jwtAuth, (req, res)=>{
  cartController.updateCart(req, res);
});
// router.route("/").post(addToCartController);
router.route("/").get(jwtAuth, (req, res)=>{
  cartController.get(req,res);
});
router.route("/").delete(jwtAuth, (req, res)=>{
  cartController.delete(req,res);
});

export default router;
