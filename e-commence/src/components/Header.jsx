import React from 'react';
import Cart from './Cart'
import '../styles/header.css'

const Header = () => {
  return (
    <header className="header">
      <h1>Welcome To Book Shop</h1>
      <nav>
        <a href="/" style={{ margin: '0 15px' }}>Home</a>
        <a href="/login" style={{ margin: '0 15px' }}>Login</a>
        <a href="/signup" style={{ margin: '0 15px' }}>Signup</a>
        <a href="/about">About</a>
        <Cart />
      </nav>
      
    </header>
  );
};

export default Header;
