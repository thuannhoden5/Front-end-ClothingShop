import React from 'react';
import './CartItem.styles.scss';

const CartItem = ({ item }) => {
  const { product, quantity } = item;
  return (
    <div className="cart-item">
      <img alt="item" src={product.image} />
      <div className="item-details">
        <span className="name">{product.title}</span>
        <span className="price">
          {quantity} x {product.price}.000 VND
        </span>
      </div>
    </div>
  );
};

export default CartItem;
