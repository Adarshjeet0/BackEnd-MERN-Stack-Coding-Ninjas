//importing express library
import express from 'express'
import ProductController from './src/controllers/product.controller.js'
import path from 'path'

//creating server
const server = express();

//setup view engine settings
server.set('view engine', 'ejs');
server.set('views', path.join(path.resolve(),'src','views'));


const productController = new ProductController();

server.get('/', productController.getProduct)
server.use(express.static('./src/views'))

server.listen(5000);
console.log("Server is running on port number 5000");