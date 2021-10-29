import React, { useEffect, useState } from 'react';
import {
  addItem,
  clearItemFromCart,
  removeItem,
} from '../../redux/cart/cart.actions';
import { useSelector } from 'react-redux';
import './Checkout.styles.scss';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import axiosInstance from '../../utils/axios';
import { Redirect } from 'react-router';

const CheckoutPage = () => {
  const cartDetail = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const [buyerInfo, setBuyerInfo] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    phoneNumber: '',
    zip: '',
  });

  const [totalPrice, setTotalPrice] = useState(0);
  const getUserInfo = async () => {
    const user = await axiosInstance.get('user/verify');
    const { firstName, lastName, email, phoneNumber, address } = user.data;
    setBuyerInfo({ firstName, lastName, email, phoneNumber, address });
  };

  const getCartInfo = async () => {
    const cart = await axiosInstance.get('cart/findCart');
    setTotalPrice(cart.data.totalPrice);
  };

  useEffect(() => {
    getCartInfo();
  }, [cartDetail]);

  useEffect(() => {
    getUserInfo();
  }, []);

  if (!cartDetail.length) return <Redirect to="/" />;

  const handleClearItem = (event) => {
    const productId = event.target.parentNode.parentNode.parentNode.id;
    const productDetail = cartDetail.find(
      (cartItem) => cartItem.product._id === productId,
    );

    axiosInstance.post('cart/removeItemFromCart', {
      item: {
        productId,
        price: productDetail.product.price,
        quantity: productDetail.quantity,
      },
    });
    dispatch(clearItemFromCart(productId));
  };

  const handleChangeBuyerInfo = (event) => {
    const { value, id } = event.target;
    console.log('value', value);
    console.log('name', id);
    setBuyerInfo({
      ...buyerInfo,
      [id]: value,
    });
  };

  const handleChangeQuantity = (event) => {
    const productId = event.target.parentNode.parentNode.parentNode.id;
    const productDetail = cartDetail.find(
      (cartItem) => cartItem.product._id === productId,
    ).product;

    if (event.target.textContent === '+') {
      axiosInstance.post('cart/addItemToCart', {
        item: { productId, price: productDetail.price, quantity: 1 },
      });
      dispatch(
        addItem({
          product: productDetail,
          quantity: 1,
        }),
      );
    } else {
      axiosInstance.post('cart/removeItemFromCart', {
        item: { productId, price: productDetail.price, quantity: 1 },
      });
      dispatch(
        removeItem({
          product: cartDetail.find(
            (cartItem) => cartItem.product._id === productId,
          ).product,
        }),
      );
    }
  };

  const placeOrder = async (event) => {
    event.preventDefault();
    const data = {
      shippingInfo: {
        ...buyerInfo,
      },
      items: cartDetail.map((item) => {
        return {
          ...item.product,
          quantity: item.quantity,
          unitPrice: item.quantity * item.product.price,
        };
      }),
      totalPrice,
    };

    console.log('data here', data);

    const response = await axiosInstance.post('order/createOrder', data);

    if (response.success) {
      response.data.items.forEach((item) => {
        console.log('here');
        dispatch(clearItemFromCart(item.productId));
      });
    }
  };
  return (
    <div className="checkout-page">
      <div className="section-left">
        <h4 className="mb-3">Billing address</h4>
        <form onSubmit={placeOrder} className="needs-validation" novalidate>
          <div className="row g-3">
            <div className="col-sm-6">
              <label for="firstName" className="form-label">
                First name<span class="jss36">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                onChange={handleChangeBuyerInfo}
                value={buyerInfo.firstName}
                required
              />
              <div className="invalid-feedback">First name is required.</div>
            </div>

            <div className="col-sm-6">
              <label for="lastName" className="form-label">
                Last name<span class="jss36">*</span>
              </label>
              <input
                type="text"
                onChange={handleChangeBuyerInfo}
                className="form-control"
                id="lastName"
                placeholder={buyerInfo.lastName}
                value={buyerInfo.lastName}
                required
              />
              <div className="invalid-feedback">Last name is required.</div>
            </div>

            <div className="col-6">
              <label for="email" className="form-label">
                Phone Number<span class="jss36">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="phone_number"
                onChange={handleChangeBuyerInfo}
                placeholder={buyerInfo.phoneNumber}
                value={buyerInfo.phoneNumber}
              />
            </div>

            <div className="col-6">
              <label for="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                onChange={handleChangeBuyerInfo}
                placeholder={buyerInfo.email}
                value={buyerInfo.email}
              />
            </div>

            <div className="col-12">
              <label for="address" className="form-label">
                Detail Address<span class="jss36">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                required
                onChange={handleChangeBuyerInfo}
                placeholder={buyerInfo.address}
                value={buyerInfo.address}
              />
              <div className="invalid-feedback">
                Shipping address is required
              </div>
            </div>

            <div className="col-md-6">
              <label for="zip" className="form-label">
                Zip
              </label>
              <input
                type="text"
                className="form-control"
                onChange={handleChangeBuyerInfo}
                id="zip"
                required
              />
              <div className="invalid-feedback">Zip code required.</div>
            </div>
          </div>

          <h4 style={{ marginTop: '3vh' }} className="mb-3">
            Payment
          </h4>

          <div className="my-3">
            <div className="form-check">
              <input
                id="credit"
                name="paymentMethod"
                type="radio"
                className="form-check-input"
                required
                checked
              />
              <label className="form-check-label" for="credit">
                Payment when delivery
              </label>
            </div>
          </div>

          <hr className="my-4" />

          <button className="w-100 btn btn-primary btn-lg" type="submit">
            Place Order
          </button>
        </form>
      </div>
      <div className="section-right">
        <h4 className="your_cart"> Your Cart </h4>
        <ul className="list-group mb-3">
          {cartDetail.map((cartItem) => {
            return (
              <li
                key={cartItem.product._id}
                className="list-group-item d-flex justify-content-start lh-sm"
              >
                <img
                  className="product-image"
                  src={cartItem.product.image}
                  alt={cartItem.product.title}
                ></img>
                <div id={cartItem.product._id} className="cart-items">
                  <div className="upper-item">
                    <h6 className="my-0">{cartItem.product.title}</h6>
                    <span
                      onClick={handleClearItem}
                      className="close-button text-muted"
                    >
                      <FontAwesomeIcon icon={faTimesCircle} />
                    </span>
                  </div>
                  <div className="footer-item">
                    <div className="quantity-handle">
                      <button onClick={handleChangeQuantity}>-</button>
                      <span>{cartItem.quantity}</span>
                      <button onClick={handleChangeQuantity}>+</button>
                    </div>
                    <span className="text-muted">
                      {cartItem.product.price}000
                    </span>
                  </div>
                </div>
              </li>
            );
          })}

          <li
            style={{ borderTop: 'solid black 1px' }}
            className="total list-group-item d-flex justify-content-between"
          >
            <strong>Total (VND)</strong>
            <strong>{totalPrice}000</strong>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CheckoutPage;
