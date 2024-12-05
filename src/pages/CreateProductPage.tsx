import React from 'react';
import CreateProductForm from '../components/CreateProductForm';
import Header from '../components/Header';

const CreateProductPage: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <CreateProductForm />
      </main>
    </>
  );
};

export default CreateProductPage;
