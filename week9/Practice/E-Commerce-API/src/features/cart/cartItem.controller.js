import CartRepository from './cart.repository.js';


// import { addToCart, removeFromCart } from "./cartItem.model.js";

export default class CartController{

  constructor(){
    this.cartRepository = new CartRepository();
  }
  async addToCart(req, res){
    try {
      const {productId, quantity} = req.body;
      const userId = req.userId;
      await this.cartRepository.add(userId, productId, quantity)
      res.status(200).send({userId, productId, quantity});
    } catch (error) {
      console.log(error);
      res.status(500).send("Something went wrong!!! ");
    }
  }
  async updateCart(req, res){
    try {
      const {productId, quantity} = req.body;
      const userId = req.userId;
      await this.cartRepository.update(userId, productId, quantity)
      res.status(200).send({userId, productId, quantity});
    } catch (error) {
      console.log(error);
      res.status(500).send("Something went wrong!!! ");
    }
  }

  async get(req, res) {
    try {
      const cartItems = await this.cartRepository.get();
      res.status(200).send(cartItems);
    } catch (error) {
      console.log(error);
      res.status(500).send("Something went wrong");
    }

  }

  async delete(req, res){
    try {
      const productId = req.body.productId;
      const userId = req.userId;
      await this.cartRepository.delete(userId, productId);
      res.status(200).send("Successfully Deleted");
    } catch (error) {
      console.log(error);
      res.status(400).send("Something went wrong!!!!!!");
    }
  }
}

// export const addToCartController = (req, res) => {
  
  


// };

// export const removeFromCartController = (req, res) => {
//   const userId = req.userId;
//   const itemId = req.params.itemId;
//   const resp = removeFromCart(userId, itemId);
//   if (resp.success) {
//     return res.status(200).json(resp);
//   } else {
//     return res.status(400).json(resp);
//   }
// };
