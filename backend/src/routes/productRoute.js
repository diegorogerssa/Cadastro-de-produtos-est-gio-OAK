const express = require('express');
const { 
  registerProductController,
  listProductController 
} = require('../controllers');
const filedProducts = require('../middlewares/fieldProducts');

const product = express.Router();

product.post('/register', filedProducts, registerProductController);
product.get('/list-product', listProductController);

module.exports = product;
