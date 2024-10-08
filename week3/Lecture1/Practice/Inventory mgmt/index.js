//importing express library
import express from 'express'
import ProductController from './src/controllers/product.controller.js'
import path from 'path'
import ejsLayouts from 'express-ejs-layouts'

//creating server
const server = express();

server.use(ejsLayouts);
//setup view engine settings
server.set('view engine', 'ejs');
server.set('views', path.join(path.resolve(),'src','views'));


const productController = new ProductController();

// parsing url data
server.use(express.urlencoded({extended:true}))

server.get('/', productController.getProduct)
server.get('/new', productController.getaddItemForm)
server.post('/',productController.addNewProduct)
server.use(express.static('./src/views'))

server.listen(5000);
console.log("Server is running on port number 5000");