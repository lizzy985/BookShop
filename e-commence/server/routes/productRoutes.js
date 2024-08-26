// const express = require('express');
// const router = express.Router();
// const { getProducts, getProductById } = require('../controllers/productController');
import express from 'express';
import { 
  getProducts, 
  getProductById, 
  createProduct, 
  updateProduct, 
  deleteProduct 
} from '../controllers/productController.js';

const router = express.Router();

// GET all products
router.get('/', getProducts);

// GET a product by ID
router.get('/:id', getProductById);

// POST a new product
router.post('/', (req, res) => {
  console.log('Request received to create product:', req.body);
  createProduct(req, res)
} );

// PUT (Update) a product by ID
router.put('/:id', updateProduct);

// DELETE a product by ID
router.delete('/:id', deleteProduct);

export default router;
