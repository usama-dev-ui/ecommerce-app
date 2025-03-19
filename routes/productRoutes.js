const express = require('express');
//const upload =require('../middleware/uploadMiddleware');
const multer=require('multer')
//const multer = require('multer');
const upload = require("../middleware/multerConfig");
const { addProduct,getProducts,deleteProduct } = require('../controllers/productController');


//const {getProducts}= require('../controllers/productListController');
const router = express.Router();
//const upload = multer();


router.post('/add',upload.single('image'), addProduct);
router.delete('/:id', deleteProduct);
router.get('/all', getProducts);

module.exports = router;
