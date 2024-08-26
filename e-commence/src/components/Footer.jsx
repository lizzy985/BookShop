import React from 'react';
import '../styles/footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <nav>
        <a href="/">Home</a>
        <a href="/contact">Contact</a>
      </nav>
      <p>&copy; 2024 Book Shop. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
