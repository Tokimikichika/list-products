import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProductStore } from '../store/productStore';

const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = useProductStore((state) =>
    state.products.find((p) => p.id === Number(id))
  );

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div>
      <button onClick={() => navigate('/products')}>Back</button>
      <img src={product.image} alt={product.title} />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
};

export default ProductDetails;
