import React from 'react';
import ProductList from './ProductList';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Product Management App</h1>
      <p>
        This is the homepage. Use the navigation links above to explore the app.
      </p>
      <ProductList />
    </div>
  );
};

export default Home;
