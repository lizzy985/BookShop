import React, { useState } from 'react';
import Cart from './Cart'
import '../styles/header.css'
import { useCart } from './CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  // const { cart } = useCart();
  const { getTotalQuantity } = useCart();
  const [isCartVisible, setIsCartVisible] = useState(false);
  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (

    <header className="header">
      <h1>Welcome To Book Shop</h1>
      <nav>
        <a href="/" style={{ margin: '0 15px' }}>Home</a>
        <a href="/login" style={{ margin: '0 15px' }}>Login</a>
        <a href="/signup" style={{ margin: '0 15px' }}>Signup</a>
        <a href="/about">About</a>
        {/* <Cart /> */}
        {/* <a href="/cart" style={{ margin: '0 15px' }}>
          <Cart /> 
        </a> */}
        <button className="cart-button" onClick={toggleCartVisibility}>
        <FontAwesomeIcon icon={faShoppingCart}/>
        {/* <span>Cart ({cart.length})</span> */}
        <span>Cart ({getTotalQuantity()} items)</span>
        </button>
        
      </nav>
      <Cart isVisible={isCartVisible} onClose={toggleCartVisibility} />
      
    </header>
  );
};

export default Header;
