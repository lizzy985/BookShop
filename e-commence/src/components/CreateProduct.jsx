// import React, { useState } from 'react';
// import axios from 'axios';

// // const API_URL = 'http://localhost:5000/api/products';

// const CreateProduct = () => {
//   const [name, setName] = useState('');
//   const [price, setPrice] = useState('');
//   const [description, setDescription] = useState('');
//   const [category, setCategory] = useState('');
//   const [image, setImage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const newProduct = { name, price: parseFloat(price), description, category, image };
//       console.log('Sending product data:', newProduct);
//       //   await axios.post('/api/products', newProduct);
//       await axios.post('http://localhost:5000/api/products', newProduct);
//     //   await axios.post(API_URL, newProduct);
//       alert('Product created successfully!');
//     } catch (error) {
//       console.error('Error creating product', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" placeholder="Product Name" value={name} onChange={(e) => setName(e.target.value)} />
//       <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
//       <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
//       <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
//       <input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} />
//       <button type="submit">Create Product</button>
      
//     </form>
//   );
// };

// export default CreateProduct;




import React, { useState } from 'react';
import axios from 'axios';

const CreateProduct = ({ onProductCreated }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newProduct = {
        name,
        price: parseFloat(price),  // Make sure price is a float
        description,
        category,
        image: image || null,
      };
      
      // Debugging: Log the data being sent
      console.log('Sending product data:', newProduct);
      
      // Send the data to the backend
      const response = await axios.post('http://localhost:5000/api/products', newProduct);
      
      // Check if the product was created successfully
      if (response.status === 201) {
        alert('Product created successfully!');
        onProductCreated();  // Notify parent component that the product was created
      }
    } catch (error) {
      console.error('Error creating product', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value) }
      />
      <button type="submit">Create Product</button>
    </form>
  );
};

export default CreateProduct;
