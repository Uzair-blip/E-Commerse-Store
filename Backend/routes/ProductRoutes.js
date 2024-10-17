const express = require('express');
const { addProduct, getAllProducts, deleteProduct } = require('../controllers/ProductController');
const router = express.Router();

router.post('/add', addProduct);
router.get('/', getAllProducts);
router.delete('/delete/:id', deleteProduct);

module.exports = router;
