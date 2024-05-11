import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Header';
import ProductDisplay from './ProductDisplay';
import ProductDetails from './ProductDetails';
import Cart from './Cart';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/computers" element={<ProductDisplay />} />
          <Route
            path="/computers/:productId" // Dynamic route parameter for product ID
            element={<ProductDetails />}
          />
          <Route
            path="/cart" // Dynamic route parameter for product ID
            element={<Cart />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;