// About.jsx
import React from 'react';
import '../styles/about.css'; 

const About = () => {
  return (
    <div className="about">
      <header className="about-header">
        <h1>About Us</h1>
      </header>
      <section className="about-content">
        <h2>Welcome to Book Shop</h2>
        <p>
          At Book Shop, we believe in the power of books to transform lives and ignite imaginations. We offer a wide selection of books, from timeless classics to the latest bestsellers. Our mission is to provide an exceptional reading experience for book lovers of all ages.
        </p>
        <h2>Our Services</h2>
        <ul>
          <li><strong>Extensive Collection:</strong> Discover a wide range of books across various genres.</li>
          <li><strong>Personalized Recommendations:</strong> Get book recommendations tailored to your interests.</li>
          <li><strong>Online Ordering:</strong> Enjoy the convenience of browsing and ordering books from the comfort of your home.</li>
          <li><strong>Customer Support:</strong> Our friendly team is here to assist you with any inquiries or concerns.</li>
        </ul>
        <h2>Contact Us</h2>
        <p>
          Have questions or feedback? Reach out to us at <a href="mailto:contact@bookshop.com">contact@bookshop.com</a>.
        </p>
      </section>
    </div>
  );
};

export default About;
