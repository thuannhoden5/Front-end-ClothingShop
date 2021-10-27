import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../ProductCard/ProductCard';
import './ProductListing.scss';
const ProductListing = () => {
  const products = useSelector((state) => state.products.products);
  const renderProducts = (products) => {
    return products.map((product, index) => {
      return <ProductCard key={index} data={product}></ProductCard>;
    });
  };
  return (
    <div className="product-wrapper">
      <div className="product-list">
        <h2>Products</h2>
        <div className="product-container">{renderProducts(products)}</div>
      </div>
    </div>
  );
};

export default ProductListing;
