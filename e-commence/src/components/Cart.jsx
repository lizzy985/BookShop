
// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
// import '../styles/header.css'
// import { useCart } from './CartContext';


// const Cart = () => {
//   const { cart } = useCart();
//   return (
//     <div className="cart">
//       <FontAwesomeIcon icon={faShoppingCart}/>
//       <span>Cart ({cart.length})</span>
//     </div>
//   );
// };

// export default Cart;
// import React from 'react';
// import { useCart } from './CartContext';
// import { useNavigate } from 'react-router-dom';
// import '../styles/cart.css'; 

// const Cart = ({ isVisible, onClose }) => {
//   const { cart, clearCart } = useCart();
//   const navigate = useNavigate();

//   if (!isVisible) return null;

//   const handleCheckout = () => {
//     // Example checkout logic; replace with actual checkout process
//     console.log('Proceeding to checkout with the following items:');
//     console.log(cart);
    
//     // Clear the cart after checkout
//     // clearCart();
//     onClose();
//     navigate('/checkout'); 
//   };

//   return (
//     <div className={`cart-modal ${isVisible ? '' : 'hidden'}`}>
//       <button className="cart-close" onClick={onClose}>Close</button>
//       <h2>Your Cart</h2>
//       {cart.length === 0 ? (
//         <p>Cart is empty</p>
//       ) : (
//         <>
//           <ul>
//             {cart.map((item, index) => (
//               <li key={index}>
//                 <span>{item.name} - ${item.price}</span>
//               </li>
//             ))}
//           </ul>
//           <button className="checkout-btn" onClick={handleCheckout}>
//             Checkout
//           </button>
//         </>
//       )}
//     </div>
//   );
// };

// export default Cart;


import React from 'react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';
import '../styles/cart.css'; 

const Cart = ({ isVisible, onClose }) => {
  const { cart, updateQuantity, calculateTotalPrice } = useCart();
  const navigate = useNavigate();

  if (!isVisible) return null;

  const handleIncreaseQuantity = (productId) => {
    updateQuantity(productId, 1);
  };

  const handleDecreaseQuantity = (productId) => {
    updateQuantity(productId, -1);
  };

  const handleCheckout = () => {
    onClose();
    navigate('/checkout');
  };

  const totalPrice = calculateTotalPrice();

  return (
    <div className={`cart-modal ${isVisible ? '' : 'hidden'}`}>
      <button className="cart-close" onClick={onClose}>Close</button>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                <span>{item.name} - ${item.price}</span>
                <div className="quantity-control">
                  <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <strong>Total Price: </strong>${totalPrice.toFixed(2)}
          </div>
          <button className="checkout-btn" onClick={handleCheckout}>
            Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;


