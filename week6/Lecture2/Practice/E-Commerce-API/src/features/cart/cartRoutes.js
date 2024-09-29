// import CartController from './cartItem.controller.js';
// import express from 'express';

// const cartRouter = express.Router();
// cartRouter.get('/',CartController.getAll);
// cartRouter.post('/', CartController.add);
// cartRouter.post('/delete', CartController.delete);


// export default cartRouter;


import express from "express";
import {
  addToCartController,
  removeFromCartController,
} from "./cartItem.controller.js";
import jwtAuth from "../../middlewares/jwt.middleware.js";
const router = express.Router();

router.route("/").post(jwtAuth, addToCartController);
// router.route("/").post(addToCartController);
router.route("/:itemId").delete(jwtAuth, removeFromCartController);

export default router;
