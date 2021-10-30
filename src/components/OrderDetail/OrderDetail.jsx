import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axiosInstance from '../../utils/axios';
import { renderDate } from '../../utils/helpers';
import CustomNavbar from '../Navbar/Navbar';
import './OrderDetail.scss';

const OrderDetail = () => {
  const { id } = useParams();
  const [orderDetail, setOrderDetail] = useState({
    items: [],
  });
  const fetchOrder = async () => {
    const response = await axiosInstance.get(`order/findOrder/${id}`);
    console.log('response here', response);
    setOrderDetail(response.data);
  };
  useEffect(() => {
    fetchOrder();
  }, []);
  return (
    <>
      <CustomNavbar></CustomNavbar>
      <div className="checkout-page">
        <div className="main_content">
          <h2 className="your_cart"> Order Detail </h2>
          <div className="order-info">
            <h3 className="order-info-title">Order Infomation</h3>
            <div className="order-info-field">
              <div>Date</div>
              <div> {renderDate(orderDetail.createdAt)} </div>
            </div>
            <div className="order-info-field">
              <div>Amount</div>
              <div>
                {orderDetail.items.reduce((sum, item) => {
                  return sum + item.quantity;
                }, 0)}{' '}
                item(s)
              </div>
            </div>
          </div>
          <ul className="list-group mb-3">
            {orderDetail.items.map((item) => {
              return (
                <li
                  key={item.productId}
                  style={{ padding: 'none' }}
                  className="list-item d-flex justify-content-start lh-sm"
                >
                  <img
                    className="product-image"
                    src={item.image}
                    alt={item.title}
                  ></img>
                  <div
                    id={item.productId}
                    className="cart-items d-flex justify-content-between"
                  >
                    <div className="upper-item d-flex justify-content-between">
                      <h6 className="my-0">{item.title}</h6>
                      <span className="text-muted">{item.price}000</span>
                    </div>
                    <div className="footer-item">
                      <div className="quantity-handle">
                        <span>{item.quantity}</span>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}

            <li
              // style={{ borderTop: 'solid black 1px' }}
              className="total d-flex justify-content-between"
            >
              <strong style={{ marginTop: '1vh' }}>Total (VND)</strong>
              <strong style={{ marginTop: '1vh' }}>
                {orderDetail.totalPrice}000
              </strong>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default OrderDetail;
