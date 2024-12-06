import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CreateProductPage from './pages/CreateProductPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/:id" element={<ProductDetailsPage />} />
        <Route path="/create-product" element={<CreateProductPage />} />
        <Route path="*" element={<ProductsPage />} />
      </Routes>
    </Router>
  ); 
};

export default App;
