// export default class CartModel{
//     constructor(productId, userId,quantity){
//         this.productId = productId;
//         this.userId = userId;
//         this.quantity = quantity;
//     }

//     static addItem(productId, userId, quantity){
//         const cartItem = new CartModel(productId, userId, quantity);
//         cartItem.id = cartItems.length + 1;
//         cartItems.push(cartItem);
//         return cartItem;
//     }

//     static get(userId){
//         const items = cartItems.filter((item)=> item.userId == userId)
//         return items;
//     }

//     static deleteItem(cartId){
//         const index = cartItems.findIndex((item) => item.id == cartId);
//         if(index == -1){
//             return null;
//         }
//         else{
//             cartItems.splice(index, 1);
//             return cartItems;
//         }
//     }
// }
// var cartItems = [new CartModel(1,1,1)];

let cartId = 0;
export class cartModel {
  constructor(userId, productId, quantity) {
    this.id = ++cartId;
    this.userId = userId;
    this.productId = productId;
    this.quantity = Number(quantity);
  }
}
const cartItems = [new cartModel(1, 2, 5), new cartModel(2, 3, 10)];
export const addToCart = (userId, productId, quantity) => {
  let newCartItem = new cartModel(userId, productId, quantity);
  let newItemFlag = true;
  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].userId == userId && cartItems[i].productId == productId) {
      cartItems[i].quantity += Number(quantity);
      newItemFlag = false;
    }
  }
  if (newItemFlag) {
    cartItems.push(newCartItem);
  }
  return { success: true, item: cartItems };
}
;
export const removeFromCart = (userId, cartItemId) => {
  let cartItemInd = cartItems.findIndex((item) => {
    return item.id == cartItemId && item.userId == userId;
  });
  if (cartItemInd >= 0) {
    let itemToDelete = cartItems[cartItemInd];
    cartItems.splice(cartItemInd, 1);
    return { success: true, deletedCartItem: itemToDelete };
  } else {
    return {
      success: false,
      msg: "operation not allowed",
    };
  }
};