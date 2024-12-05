import React from 'react';
import ProductList from '../components/ProductList';
import Header from '../components/Header';

const ProductsPage: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <ProductList />
      </main>
    </>
  );
};

export default ProductsPage;
