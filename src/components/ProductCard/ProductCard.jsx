import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.scss';

const ProductCard = ({ data }) => {
  return (
    <div className="card-item">
      <Link to={`/product/${data._id}`}>
        <div className="card-inner">
          <div className="card-top">
            <img src={data.image} alt={data.title} />
          </div>
          <div className="card-bottom">
            <div className="card-info">
              <h4>{data.title}</h4>
              <p> {data.price}.000 VND</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
