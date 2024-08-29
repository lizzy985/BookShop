// // src/components/ProductList.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ProductList = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const { data } = await axios.get('/api/products');
//         setProducts(data);
//       } catch (error) {
//         console.error('Error fetching products', error);
//       }
//     };
//     fetchProducts();
//   }, []);

//   const deleteProduct = async (id) => {
//     if (window.confirm('Are you sure you want to delete this product?')) {
//       try {
//         await axios.delete(`/api/products/${id}`);
//         setProducts(products.filter(product => product._id !== id));  // Update UI after deletion
//       } catch (error) {
//         console.error('Error deleting product', error);
//       }
//     }
//   };

//   return (
//     <div>
//       <h1>Product List</h1>
//       <ul>
//         {products.map(product => (
//           <li key={product._id}>{product.name}</li>
//         ))}
//         <button onClick={() => deleteProduct(product._id)}>Delete</button>
//       </ul>

//     </div>
//   );
// };

// export default ProductList;


// import React, { useState, useEffect } from 'react';
// import ProductService from './ProductService';
// import CreateProduct from './CreateProduct';
// import '../styles/productlist.css';

// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const [isCreating, setIsCreating] = useState(false);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const result = await ProductService.getProducts();
//       setProducts(result.data);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     }
//   };

//   const handleCreateProduct = () => {
//     setIsCreating(true);
//   };

//   const handleProductCreated = () => {
//     setIsCreating(false);
//     fetchProducts();
//   };

//   const handleUpdateProduct = async (id, updatedProduct) => {
//     try {
//       await ProductService.updateProduct(id, updatedProduct);
//       fetchProducts();
//     } catch (error) {
//       console.error('Error updating product:', error);
//     }
//   };

//   const handleDeleteProduct = async (id) => {
//     try {
//       await ProductService.deleteProduct(id);
//       fetchProducts();
//     } catch (error) {
//       console.error('Error deleting product:', error);
//     }
//   };

//   return (
//     <div className="product-list-container">
//       {/* <h1>Welcome to Lizzy Book Shop</h1>
//       <p>
//         This is the homepage. Use the navigation links above to explore the app.
//       </p> */}
//       <button className="create-product-btn" onClick={handleCreateProduct}>Create New Product</button>
//       {isCreating && <CreateProduct onProductCreated={handleProductCreated} />}
//       <ul className="product-list">
//         {products.map((product) => (
//           <li key={product.id}>
//             {product.name} - ${product.price}
//             <div className="product-actions">
//                 <button onClick={() => handleUpdateProduct(product.id, { name: 'Updated Name', price: 20 })}>
//                 Update
//                 </button>
//                 <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
//             </div>

//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ProductList;





import React, { useState, useEffect } from 'react';
import ProductService from './ProductService';
import CreateProduct from './CreateProduct';
import '../styles/productlist.css';
import { useCart } from './CartContext';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isCreating, setIsCreating] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const result = await ProductService.getProducts();
      setProducts(result.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleCreateProduct = () => {
    setIsCreating(true);
  };

  const handleProductCreated = () => {
    setIsCreating(false);
    fetchProducts();
  };

  const handleUpdateProduct = (product) => {
    setIsUpdating(true);
    setCurrentProduct(product); // Set the current product with the correct ID
  };

  const handleProductUpdated = async () => {
    if (currentProduct && currentProduct.id) {
      try {
        await ProductService.updateProduct(currentProduct.id, currentProduct);
        setIsUpdating(false);
        setCurrentProduct(null); // Clear the form after updating
        fetchProducts();
      } catch (error) {
        console.error('Error updating product:', error);
      }
    } else {
      console.error('Product ID is undefined.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentProduct({ ...currentProduct, [name]: value });
  };

  const handleDeleteProduct = async (id) => {
    try {
      await ProductService.deleteProduct(id);
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="product-list-container">
      <button className="create-product-btn" onClick={handleCreateProduct}>Create New Product</button>
      {isCreating && <CreateProduct onProductCreated={handleProductCreated} />}

      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <div className="product-actions">
              <button onClick={() => handleUpdateProduct(product)}>Update</button>
              <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
              <button onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
            </div>
          </li>
        ))}
      </ul>

      {isUpdating && currentProduct && (
        <div className="update-product-form">
          <h2>Update Product</h2>
          <input
            type="text"
            name="name"
            value={currentProduct.name}
            onChange={handleInputChange}
            placeholder="Product Name"
          />
          <input
            type="number"
            name="price"
            value={currentProduct.price}
            onChange={handleInputChange}
            placeholder="Product Price"
          />
          <button onClick={handleProductUpdated}>Save Changes</button>
          <button onClick={() => setIsUpdating(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default ProductList;

