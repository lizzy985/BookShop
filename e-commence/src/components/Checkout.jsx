// // src/components/Checkout.jsx
// import React, { useState } from 'react';
// import { useCart } from './CartContext';

// const Checkout = () => {
//   const { cart, clearCart } = useCart();
//   const [address, setAddress] = useState('');
//   const [totalPrice, setTotalPrice] = useState(
//     cart.reduce((sum, item) => sum + item.price, 0)
//   );

//   const handleAddressChange = (e) => {
//     setAddress(e.target.value);
//   };

//   const handleSubmitOrder = () => {
//     // Example order submission logic; replace with actual API call
//     console.log('Order submitted:', { address, totalPrice, cartItems: cart });

//     // Clear the cart after order submission
//     clearCart();
//     // Redirect to a confirmation page or homepage after order submission
//     // For example, you could use useNavigate from react-router-dom
//   };

//   return (
//     <div className="checkout">
//       <h2>Checkout</h2>
//       <div className="checkout-details">
//         <label>
//           Address:
//           <input
//             type="text"
//             value={address}
//             onChange={handleAddressChange}
//             placeholder="Enter your address"
//           />
//         </label>
//         <div className="checkout-total">
//           <strong>Total Price: </strong>${totalPrice.toFixed(2)}
//         </div>
//       </div>
//       <button className="submit-order-btn" onClick={handleSubmitOrder}>
//         Submit Order
//       </button>
//     </div>
//   );
// };

// export default Checkout;


import React, { useState, useEffect } from 'react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const [address, setAddress] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // Recalculate total price whenever cart items change
    const calculatedTotalPrice = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotalPrice(calculatedTotalPrice);
  }, [cart]);

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmitOrder = () => {
    // Example order submission logic; replace with actual API call
    console.log('Order submitted:', { address, totalPrice, cartItems: cart });

    // Clear the cart after order submission
    clearCart();
    // Redirect to a confirmation page or homepage after order submission
    // For example, you could use useNavigate from react-router-dom
    navigate('/'); 
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <div className="checkout-details">
        <label>
          Address:
          <input
            type="text"
            value={address}
            onChange={handleAddressChange}
            placeholder="Enter your address"
          />
        </label>
        <div className="checkout-total">
          <strong>Total Price: </strong>${totalPrice.toFixed(2)}
        </div>
      </div>
      <button className="submit-order-btn" onClick={handleSubmitOrder}>
        Submit Order
      </button>
    </div>
  );
};

export default Checkout;

