import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CreateProductPage from './pages/CreateProductPage';

const App: React.FC = () => {
  return (
    <Router basename="/products">
      <Routes>
      <Route path="/" element={<Navigate to="/products" replace />} />
        <Route path="/list-products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetailsPage />} />
        <Route path="/create-product" element={<CreateProductPage />} />
        <Route path="*" element={<Navigate to="/products" replace />} />
      </Routes>
    </Router>
  ); 
};

export default App;
