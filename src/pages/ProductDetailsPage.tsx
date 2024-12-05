import React from 'react';
import ProductDetails from '../components/ProductDetails';
import Header from '../components/Header';

const ProductDetailsPage: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <ProductDetails />
      </main>
    </>
  );
};

export default ProductDetailsPage;
