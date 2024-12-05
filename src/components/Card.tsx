import React, { useState } from 'react';
import { Product } from '../store/productStore';
import EditProductForm from './EditProductForm';
import styles from './Card.module.css';

interface CardProps {
  product: Product;
  onLike: () => void;
  onDelete: () => void;
  onViewDetails: () => void;
}

const Card: React.FC<CardProps> = ({ product, onLike, onDelete, onViewDetails }) => {
    const [isEditing, setIsEditing] = useState(false);

    if (isEditing) {
        return <EditProductForm product={product} onCancel={() => setIsEditing(false)} />;
    }
    return (
    <div className={styles.card} onClick={onViewDetails}>
      <img src={product.image} alt={product.title} className={styles.image} />
      <h3>{product.title}</h3>
      <p>{product.description.slice(0, 50)}...</p>
      <div className={styles.actions}>
        <button onClick={(e) => { e.stopPropagation(); onLike(); }}>
          {product.liked ? '❤️' : '🤍'}
        </button>
        <button onClick={(e) => { e.stopPropagation(); onDelete(); }}>🗑️</button>
        <button onClick={(e) => { e.stopPropagation(); setIsEditing(true); }}>✏️</button>
      </div>
    </div>
  );
};

export default Card;
