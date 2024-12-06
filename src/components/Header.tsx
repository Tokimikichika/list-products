import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1>Product Store</h1>
      <nav>
        <Link to="/">Products</Link>
        <Link to="/create-product">Create Product</Link>
      </nav>
    </header>
  );
};

export default Header;
