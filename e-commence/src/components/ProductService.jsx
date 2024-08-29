// ProductService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/products';

const getProducts = () => axios.get(API_URL);
const createProduct = (product) => axios.post(API_URL, product);
// const updateProduct = (id, product) => axios.put(`${API_URL}/${id}`, product);
const updateProduct = async (id, updatedProduct) => {
  if (!id) {
    throw new Error('Product ID is missing');
  }
  const response = await axios.put(`${API_URL}/${id}`, updatedProduct);
  return response.data;
};
// const deleteProduct = (id) => axios.delete(`${API_URL}/${id}`);
const deleteProduct = async (id) => {
  try {
    console.log('Deleting product with ID:', id);
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting product:', error);
    throw error;
  }
};

export default {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
