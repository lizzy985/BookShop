
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UpdateProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    category: '', 
    image: ''
  });

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${id}`);
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/products/${id}`, product);
      alert('Product updated successfully!');
    } catch (error) {
      console.error('Error updating product', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Product Name"
        value={product.name}
        onChange={(e) => setProduct({ ...product, name: e.target.value })}
      />
      <input
        type="number"
        placeholder="Price"
        value={product.price}
        onChange={(e) => setProduct({ ...product, price: e.target.value })}
      />
      <input
        type="text"
        placeholder="Description"
        value={product.description}
        onChange={(e) => setProduct({ ...product, description: e.target.value })}
      />
      <input
        type="text"
        placeholder="Category"
        value={product.category}
        onChange={(e) => setProduct({ ...product, category: e.target.value })}
      />
       <input
        type="text"
        placeholder="Image URL"
        value={product.image}
        onChange={(e) => setProduct({ ...product, image: e.target.value })}
      />
      <button type="submit">Update Product</button>
    </form>
  );
};

export default UpdateProduct;
