// const mongoose = require('mongoose');

// const productSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   description: { type: String, required: true },
//   price: { type: Number, required: true },
//   imageUrl: { type: String, required: true },
//   countInStock: { type: Number, required: true },
// }, { timestamps: true });

// module.exports = mongoose.model('Product', productSchema);

import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  category:{type: String, required: true},
  image: { type: String, required: false },
});

const Product = mongoose.model('Product', productSchema);

export default Product;

