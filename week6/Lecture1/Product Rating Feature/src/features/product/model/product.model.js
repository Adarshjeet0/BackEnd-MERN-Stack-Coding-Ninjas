// Please don't change the pre-written code
// Import the necessary modules here
import {getAllUsers} from '../../user/model/user.model.js';

let id = 3;
const products = [
  { id: 1, name: "iphone", price: 100000 },
  { id: 2, name: "oneplus", price: 50000 },
  { id: 3, name: "samsung", price: 60000 },
];

export const fetchAllProducts = () => {
  return products;
};


const getProducts = (id)=>{
  const newPro = products.find((product) => product.id == id);
  return newPro;
}

export const rateProductModel = (productId, userId, ratings)=>{
  const product = getProducts(productId);
  if(!product){
    return "Product not found";
  }
  const users = getAllUsers();
  const user = users.find((user) => user.id == userId);
  if(!user){
    return "User not found";
  }
  ratings = parseInt(ratings);
  if(ratings>=1 && ratings<=5){
    // continue;
  }else{
    return "Invalid rating";
  }

  if(!product.ratings){
    product.ratings = [];
  }
  const existingRatingIndex = product.ratings.findIndex(p => p.id == userId);
  if(existingRatingIndex>=0){
    product.ratings[existingRatingIndex] = {rating:ratings,id:userId};
  }else{
    product.ratings.push({rating: ratings, id: userId});
  }
  return product;
}