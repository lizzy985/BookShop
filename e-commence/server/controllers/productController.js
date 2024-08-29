// const Product = require('../models/Product');

// // get all products
// const getProducts = async (req, res) => {
//   try {
//     const products = await Product.find({});
//     res.json(products);
//   } catch (error) {
//     res.status(500).json({ message: 'Server Error' });
//   }
// };

// // get product by id
// const getProductById = async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     if (product) {
//       res.json(product);
//     } else {
//       res.status(404).json({ message: 'Product not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ message: 'Server Error' });
//   }
// };

// module.exports = {getProducts, getProductById};

import Product from "../models/Product.js";
import mongoose from 'mongoose';
export const getProducts = async (req, res) => {
    try {
      const products = await Product.find({});
      // Format the products, mapping _id to id
      const formattedProducts = products.map(product => ({
      id: product._id, // Map _id to id
      name: product.name,
      price: product.price,
      description: product.description,
      category: product.category,
      image: product.image
    }));
      // res.json(products);
      res.json(formattedProducts);
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  };
  
  export const getProductById = async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (product) {
        res.json(product);
      } else {
        res.status(404).json({ message: 'Product not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  };
  
// Create a new product
export const createProduct = async (req, res) => {
    try {
      const { name, price, description, category, image } = req.body;
      if (!name || !price || !description || !category || !image) {
        return res.status(400).json({ message: 'All fields are required' });
      }
      const product = new Product({
        name,
        price,
        description,
        category,
        image
      });
      
      const createdProduct = await product.save();
      res.status(201).json(createdProduct);
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  };
  
  // Update an existing product
  export const updateProduct = async (req, res) => {
    try {
      const { name, price, description, category } = req.body;
      const product = await Product.findById(req.params.id);
  
      if (product) {
        product.name = name || product.name;
        product.price = price || product.price;
        product.description = description || product.description;
        product.category = category || product.category;
  
        const updatedProduct = await product.save();
        res.json(updatedProduct);
      } else {
        res.status(404).json({ message: 'Product not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  };
  
  // Delete a product
  // export const deleteProduct = async (req, res) => {
  //   try {
  //     // Validate MongoDB ObjectID format
  //     if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
  //       return res.status(400).json({ message: 'Invalid product ID' });
  //     }

  //   //   const product = await Product.findById(req.params.id);
  
  //   //   if (product) {
  //   //     await product.remove();
  //   //     res.json({ message: 'Product removed' });
  
  //     const result = await Product.findByIdAndDelete(req.params.id);

  //     if (result) {
  //       res.json({ message: 'Product removed' });
  //     } else {
  //       res.status(404).json({ message: 'Product not found' });
  //     }
  //   } catch (error) {
  //     console.error('Server Error:', error.message); // More detailed logging
  //     res.status(500).json({ message: 'Server Error' });
  //   }
  // };
  export const deleteProduct = async (req, res) => {
    try {
        // Validate MongoDB ObjectID format
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: 'Invalid product ID' });
        }

        // Log the ID being deleted
        console.log(`Attempting to delete product with ID: ${req.params.id}`);

        // Find and delete the product
        const result = await Product.findByIdAndDelete(req.params.id);

        if (result) {
            console.log('Product deleted successfully:', result);
            res.json({ message: 'Product removed' });
        } else {
            console.log('Product not found');
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        console.error('Server Error:', error.message); // More detailed logging
        res.status(500).json({ message: 'Server Error' });
    }
};