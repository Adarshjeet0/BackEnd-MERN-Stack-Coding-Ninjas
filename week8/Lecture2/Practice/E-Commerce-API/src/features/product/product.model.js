import UserModel from '../user/user.model.js';
import { ApplicationError } from '../../error-Handler/applicationError.js';

export default class ProductModel{
    constructor(id, name, desc, price, imageUrl, category, sizes){
        this.id=id;
        this.name=name;
        this.desc=desc;
        this.price=price;
        this.imageUrl=imageUrl;
        this.category=category;
        this.sizes=sizes;
    }

    static GetAll(){
        return products;
    }

    static add(product){
      product.id = products.length + 1;
      products.push(product);
      return product;
    }

    static get(id){
      const newPro = products.find((product) => product.id == id);
      return newPro;
    }

    static getFilteredProducts(minPrice, maxPrice, category){
      const result = products.filter((product)=>{
        return ((!minPrice || product.price >= minPrice) && (!maxPrice || product.price <= maxPrice) && (!category || product.category == category))
      });
      return result;
    }

    static rateProduct(userId, productId, rating){
      const product = this.get(productId);

      //Validate Product
      if(!product){
        throw new ApplicationError("Product not found", 400);
      }
      const user = UserModel.getUser(userId);

      // Validate User
      if(!user){
        throw new ApplicationError("User not found", 403);
      }

      if(!product.ratings){
        product.ratings = [];
      }
      const existingRatingIndex = product.ratings.findIndex(p => p.id == userId);
      if(existingRatingIndex>=0){
        product.ratings[existingRatingIndex] = {rating:rating,userId:userId};
      }else{
        product.ratings.push({rating: rating, id: userId});
      }
    }
} 

var products = [
    new ProductModel(
      1,
      'Product 1',
      'Description for Product 1',
      19.99,
      'https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg',
      'Category1'
    ),
    new ProductModel(
      2,
      'Product 2',
      'Description for Product 2',
      29.99,
      'https://m.media-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg',
      'Category2',
      ['M', 'XL']
    ),
    new ProductModel(
      3,
      'Product 3',
      'Description for Product 3',
      39.99,
      'https://m.media-amazon.com/images/I/31PBdo581fL._SX317_BO1,204,203,200_.jpg',
      'Category3',
      ['M', 'XL','S']
    )
  ];