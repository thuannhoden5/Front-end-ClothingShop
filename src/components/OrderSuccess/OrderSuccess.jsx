import React from 'react';
import { Link } from 'react-router-dom';
import './OrderSuccess.scss';
import { useParams } from 'react-router';

const OrderSuccess = () => {
  const { id } = useParams();
  return (
    <div className="order-success d-flex justify-content-center">
      <div className="order-container d-flex">
        <img
          src={
            'https://cdn.iconscout.com/icon/premium/png-256-thumb/complete-order-2914848-2412925.png'
          }
          alt="order-success"
        ></img>
        <h3 className="thanks">Thank you for yours orders </h3>
        <Link to={`/order/${id}`} className="view-order-detail">
          {' '}
          View your order details
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccess;
