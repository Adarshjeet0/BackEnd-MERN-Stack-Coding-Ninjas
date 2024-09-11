//importing express library
import express from 'express'
import ProductController from './src/controllers/product.controller.js'
import UserController from './src/controllers/user.controller.js'
import path from 'path'
import ejsLayouts from 'express-ejs-layouts'
import {validateRequest} from './src/middlewares/validation.middleware.js';
import {uploadFile} from './src/middlewares/file-upload.middleware.js';
import {auth} from './src/middlewares/auth.middleware.js';
import session from 'express-session';
//creating server
const server = express();

server.use(ejsLayouts);
server.use(express.json());
//setup view engine settings
server.set('view engine', 'ejs');
server.set('views', path.join(path.resolve(),'src','views'));


const productController = new ProductController();
const userController = new UserController();

// parsing url data
// app.use(express.static('public'));
server.use(session({
  secret:'SecretKey',
  resave: false,
  saveUninitialized: true,
  cookie:{secure:false},
}));
server.use(express.urlencoded({extended:true}));
server.use(express.static('./src/views'));
server.use(express.static('./public'));

server.get('/',auth, productController.getProduct)
server.get('/new',auth, productController.getaddItemForm)
server.post('/',auth,uploadFile.single('imageUrl'),validateRequest, productController.addNewProduct)

server.post('/update-products', auth, productController.postUpdateProducts);
server.get('/update-products/:id', auth, productController.updateProduct)

server.post('/delete-product/:id',auth, productController.deleteProduct);

server.get('/register',userController.getRegister)
server.post('/register',userController.postRegister)

server.get('/login',userController.getLogin)
server.post('/login', userController.postLogin)

server.get('/logout',userController.logout);


server.listen(5000);
console.log("Server is running on port number 5000");