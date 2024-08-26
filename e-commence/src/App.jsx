
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import ProductList from './components/ProductList';
// import ProductDetails from './components/ProductDetails';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<ProductList />} />
//         <Route path="/product/:id" element={<ProductDetails />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Header from './components/header';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/products" element={<ProductList />} /> */}
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/about' element={<About/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>

  );
}

export default App;




