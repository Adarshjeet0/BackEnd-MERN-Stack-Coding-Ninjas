// Manage routes/paths to ProductController

// 1. Import express.
import express from 'express';
import ProductController from './product.controller.js';
import {upload} from '../../middlewares/fileUpload.middleware.js';

// 2. Initialize Express router.
const productRouter = express.Router();
const productController = new ProductController();

// All the paths to the controller methods.
// localhost/api/products 
productRouter.get('/rate', productController.rateProduct);
productRouter.get('/filter', productController.getfilteredProducts);
productRouter.get('/', (req, res)=>{
    productController.getAllProducts(req, res);
});
productRouter.post('/', upload.single('imageUrl'), (req, res)=>{
    productController.addProduct(req, res);
});
productRouter.get('/:id', (req, res)=>{
    productController.getOneProduct(req, res);
});


export default productRouter;