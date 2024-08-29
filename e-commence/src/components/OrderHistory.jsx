import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import '../styles/orderHistory.css'; // Optionally, add custom styling


const API_U = 'http://localhost:5000/api/orders';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch the user's order history from the backend
    const fetchOrderHistory = async (orders) => {
      try {
        const response = await axios.get(API_U, orders); // Adjust the endpoint if necessary
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching order history:', error);
      }
    };

    fetchOrderHistory();
  }, []);

  return (
    <div className="order-history">
      <h2>Your Order History</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order._id}>
              <div>
                <strong>Order ID:</strong> {order._id}
              </div>
              <div>
                <strong>Date:</strong> {new Date(order.createdAt).toLocaleDateString()}
              </div>
              <div>
                <strong>Total Price:</strong> ${order.totalPrice.toFixed(2)}
              </div>
              <div>
                <strong>Items:</strong>
                <ul>
                  {order.items.map((item, index) => (
                    <li key={index}>
                      {item.name} - ${item.price} x {item.quantity}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderHistory;
