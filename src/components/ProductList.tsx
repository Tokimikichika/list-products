import React, { useState, useEffect } from 'react';
import { useProductStore } from '../store/productStore';
import { useNavigate } from 'react-router-dom';
import Card from './Card';
import styles from './ProductList.module.css';

const ITEMS_PER_PAGE = 6;

const ProductList: React.FC = () => {
  const { products, fetchProducts, toggleLike, removeProduct } = useProductStore();
  const [filter, setFilter] = useState<'all' | 'liked'>(
    () => localStorage.getItem('filter') as 'all' | 'liked' || 'all'
  );
  const [priceFilter, setPriceFilter] = useState<number | null>(
    () => Number(localStorage.getItem('priceFilter')) || null
  );
  const [searchQuery, setSearchQuery] = useState(
    () => localStorage.getItem('searchQuery') || ''
  );
  const [currentPage, setCurrentPage] = useState(
    () => Number(localStorage.getItem('currentPage')) || 1
  );
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    localStorage.setItem('filter', filter);
  }, [filter]);

  useEffect(() => {
    localStorage.setItem('priceFilter', priceFilter?.toString() || '');
  }, [priceFilter]);

  useEffect(() => {
    localStorage.setItem('searchQuery', searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    localStorage.setItem('currentPage', currentPage.toString());
  }, [currentPage]);

  const filteredProducts = products
    .filter((product) => (filter === 'liked' ? product.liked : true))
    .filter((product) => (priceFilter !== null ? product.price <= priceFilter : true))
    .filter((product) => product.title.toLowerCase().includes(searchQuery.toLowerCase()));

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div>
      <div className={styles.filterPanel}>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('liked')}>Liked</button>
        <label>
          Max Price:
          <input
            type="number"
            value={priceFilter || ''}
            onChange={(e) => setPriceFilter(Number(e.target.value) || null)}
          />
        </label>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className={styles.productGrid}>
        {paginatedProducts.map((product) => (
          <Card
            key={product.id}
            product={product}
            onLike={() => toggleLike(product.id)}
            onDelete={() => removeProduct(product.id)}
            onViewDetails={() => navigate(`/products/${product.id}`)}
          />
        ))}
      </div>

      <div className={styles.pagination}>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={currentPage === index + 1 ? styles.activePage : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
