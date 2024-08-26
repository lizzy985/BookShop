// import React, { useState } from 'react';

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([
//     { id: 1, name: 'Item 1', quantity: 2 },
//     { id: 2, name: 'Item 2', quantity: 1 },
//   ]);

//   return (
//     <div style={{ padding: '20px', backgroundColor: '#f1f1f1' }}>
//       <h2>Shopping Cart</h2>
//       <ul>
//         {cartItems.length === 0 ? (
//           <li>Your cart is empty.</li>
//         ) : (
//           cartItems.map(item => (
//             <li key={item.id}>
//               {item.name} (x{item.quantity})
//             </li>
//           ))
//         )}
//       </ul>
//       <button onClick={() => alert('Proceed to Checkout')}>Checkout</button>
//     </div>
//   );
// };

// export default Cart;

// Cart.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '../styles/header.css'

const Cart = () => {
  return (
    <div className="cart">
      <FontAwesomeIcon icon={faShoppingCart}/>
      <span>Cart</span>
    </div>
  );
};

export default Cart;

