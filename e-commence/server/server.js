// const express = require('express');
// const dotenv = require('dotenv');
// const cors = require('cors');
// const connectDB = require('./config/db');
// const productRoutes = require('./routes/productRoutes');

// dotenv.config();
// connectDB();

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.use('/api/products', productRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
// import productRoutes from './routes/productRoutes.js'
import productRoutes  from './routes/productRoutes.js';
import orderRoutes from './routes/orderRoutes.js'
import conn from './db/conn.js'

dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000;

conn();

// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.error(err));

app.use(cors({
  origin: '*', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));
app.use(express.json());


app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

// app.get('/', (req, res) => {
//   res.send('API is running...');
// });
// Error handling middleware (optional but recommended)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Server error' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});





