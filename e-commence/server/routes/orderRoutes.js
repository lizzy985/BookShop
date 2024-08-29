import express from 'express';
import Order from '../models/Order.js'; 
const router = express.Router();

router.post('/order', async (req, res) => {
  try {
    const { address, totalPrice, items } = req.body;

    const newOrder = new Order({
      address,
      totalPrice,
      items,
      date: new Date(),
    });

    await newOrder.save();

    res.status(201).json({ message: 'Order submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
