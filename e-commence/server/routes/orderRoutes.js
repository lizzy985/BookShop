// import express from 'express';
// import Order from '../models/Order.js'; 
// const router = express.Router();

// router.post('/order', async (req, res) => {
//   try {
//     const { address, totalPrice, items } = req.body;

//     const newOrder = new Order({
//       address,
//       totalPrice,
//       items,
//       date: new Date(),
//     });

//     await newOrder.save();

//     res.status(201).json({ message: 'Order submitted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// export default router;







import express from 'express';
import Order from '../models/Order.js'; 
import mongoose from 'mongoose';
// import Product from '../models/Product.js';
import dotenv from 'dotenv';
dotenv.config();


const router = express.Router();

// Sample product IDs (replace with actual ObjectIds from your database)
const productId1 = new mongoose.Types.ObjectId('66cbc1a51a6345ba403bb58c'); 
const productId2 = new mongoose.Types.ObjectId('66cfdbcc749972aab760066b'); 

// Sample orders
const orders = [
  {
    address: {
      street: '123 Elm Street',
      city: 'Springfield',
      state: 'IL',
      zip: '62701',
    },
    totalPrice: 9,
    items: [
      { product: productId1, quantity: 2 }, // Product 1
      { product: productId2, quantity: 1 }, // Product 2
    ],
    date: new Date(),
  },
  {
    address: {
      street: '456 Maple Avenue',
      city: 'Shelbyville',
      state: 'IL',
      zip: '62565',
    },
    totalPrice: 17,
    items: [
      { product: productId1, quantity: 1 }, // Product 1
      { product: productId2, quantity: 3 }, // Product 2
    ],
    date: new Date(),
  },
  {
    address: {
      street: '789 Oak Road',
      city: 'Capital City',
      state: 'IL',
      zip: '62704',
    },
    totalPrice: 10,
    items: [
      { product: productId2, quantity: 2 }, // Product 2
    ],
    date: new Date(),
  },
];

// Function to insert sample orders
const insertSampleOrders = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');

    await Order.insertMany(orders);
    console.log('Sample orders inserted successfully');
  } catch (error) {
    console.error('Error inserting sample orders:', error.message);
    console.error(error.stack);
  } finally {
    mongoose.disconnect();
  }
};


insertSampleOrders();

router.post('/', async (req, res) => {
  try {
    const { address, totalPrice, items } = req.body;

    // Validate the request body
    if (!address || !totalPrice || !items || items.length === 0) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newOrder = new Order({
      address,
      totalPrice,
      items,
      date: new Date(),
    });

    await newOrder.save();

    res.status(201).json({ message: 'Order submitted successfully', order: newOrder });
  } catch (error) {
    console.error('Error submitting order:', error);
    res.status(500).json({ message: 'Server error' });
  }
});


router.get('/', async (req, res) => {
  try {
    const orders = await Order.find().populate('items'); // Populate the 'items' field if it's a reference
    res.status(200).json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ message: 'Server error' });
  }
});


export default router;








