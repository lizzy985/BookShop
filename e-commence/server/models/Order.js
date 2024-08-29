// import mongoose from 'mongoose';

// const orderSchema = new mongoose.Schema({
//   address: {
//     street: { type: String, required: true },
//     city: { type: String, required: true },
//     state: { type: String, required: true },
//     zip: { type: String, required: true },
//   },
//   totalPrice: { type: Number, required: true },
//   items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
//   date: { type: Date, default: Date.now },
// });

// const Order = mongoose.model('Order', orderSchema);

// export default Order;



import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true },
  },
  totalPrice: { type: Number, required: true },
  items: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
      quantity: { type: Number, required: true }, // Track the quantity of each product
    }
  ],
  date: { type: Date, default: Date.now },
});

const Order = mongoose.model('Order', orderSchema);

export default Order;

