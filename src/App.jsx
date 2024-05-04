import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Header';
import ProductDisplay from './ProductDisplay';
import ProductDetails from './ProductDetails'; // Placeholder for detailed product page

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<ProductDisplay />} />
          <Route
            path="/computers/:productId" // Dynamic route parameter for product ID
            element={<ProductDetails />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;