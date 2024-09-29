// import CartModel from './cartItem.model.js';

// export default class CartController{
//     static add(req, res){
//         const {productId, quantity} = req.query;
//         const userId = req.userId;
//         CartModel.addItem(productId, userId, quantity);
//         res.status(200).send("Cart is updated");
//     }
//     static getAll(req, res){
//         const userId = req.userId;
//         const cartList = CartModel.get(userId);  
//         res.status(200).send(cartList);
//     }

//     static delete(req, res){
//         const {cartId} = req.body;
//         const deletedItem = CartModel.deleteItem(cartId);
//         if(!deletedItem){
//             return res.status(404).send("Invalid cart Id");
//         }
//         else{
//             return res.status(201).send("Deleted Successfully!!");
//         }
//     }
// }


import { addToCart, removeFromCart } from "./cartItem.model.js";

export const addToCartController = (req, res) => {
  const { productId, quantity } = req.query;
  const userId = req.userId;
  if (!productId || !quantity) {
    res
      .status(400)
      .json({ success: false, msg: "invalid productId or quantity" });
  }
  let addStatus = addToCart(userId, productId, quantity);
  if (addStatus.success) {
    return res.status(200).json(addStatus);
  } else {
    res
      .status(400)
      .json({ success: false, msg: "invalid id for the cart item" });
  }
  res.send(req.query);
};

export const removeFromCartController = (req, res) => {
  const userId = req.userId;
  const itemId = req.params.itemId;
  const resp = removeFromCart(userId, itemId);
  if (resp.success) {
    return res.status(200).json(resp);
  } else {
    return res.status(400).json(resp);
  }
};
