import React, { useEffect, useState } from 'react';
import { setCurrentUser } from '../../redux/user/user.actions';
import {
  addItem,
  clearItemFromCart,
  removeItem,
  setItem,
} from '../../redux/cart/cart.actions';
import { LinkContainer } from '../auth/sign-in/sign-in.styles';

import { CustomButton } from '../custom-button/custom-button.component';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Checkout.styles.scss';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import axiosInstance from '../../utils/axios';
import FormInput from '../form-input/form-input.component';
import { Redirect, useHistory } from 'react-router';
import { renderErrorMessage } from '../../utils/helpers';

const CheckoutPage = () => {
  const cartDetail = useSelector((state) => state.cart.cartItems);
  const currentUser = useSelector((state) => state.user.currentUser);

  console.log(currentUser);

  const dispatch = useDispatch();
  const history = useHistory();
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
    if (user.success) {
      const { firstName, lastName, email, phoneNumber, address } = user.data;
      setBuyerInfo({ firstName, lastName, email, phoneNumber, address });
    }
  };

  const getCartInfo = async () => {
    const cart = await axiosInstance.get('cart/findCart');
    if (cart.success) {
      dispatch(setItem(cart.data.items));
      // setTotalPrice(cart.data.totalPrice);
    }
  };
  const [values, setValues] = useState({
    email: '',
    password: '',
    role: 'buyers',
  });
  const [err, setErr] = useState('');
  const handleChange = (event) => {
    const { value, name } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setErr(false);
    const response = await axiosInstance.post('/user/login', values);

    if (response.success) {
      localStorage.setItem('token', response.data.token);

      setTimeout(() => {
        dispatch(setCurrentUser(response.data.user));
      }, 1500);
    } else {
      setErr(response.message);
    }
  };

  useEffect(() => {
    setTotalPrice(
      cartDetail.reduce((sum, item) => {
        return sum + item.product.price * item.quantity;
      }, 0),
    );
    getCartInfo();
  }, [cartDetail]);

  useEffect(() => {
    getUserInfo();
  }, [currentUser]);

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
        dispatch(clearItemFromCart(item.productId));
      });
      history.replace(`/checkout-success/${response.data._id}`);
    }
  };
  return (
    <div className="checkout-page">
      {currentUser && (
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
                  id="phoneNumber"
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
      )}
      {!currentUser && (
        <div className="section-left-login">
          <h3>Sign in to check out </h3>

          {err && (
            <div class="alert alert-danger" role="alert">
              {renderErrorMessage(err)}
            </div>
          )}

          <form onSubmit={handleSubmit} className="novalidate">
            <FormInput
              name="email"
              type="email"
              handleChange={handleChange}
              label="Email"
              errMessage={err}
              value={values.email}
            />
            <FormInput
              name="password"
              type="password"
              handleChange={handleChange}
              label="Password"
              value={values.password}
            />
            <LinkContainer>
              <CustomButton type="submit" color="blue">
                SIGN IN
              </CustomButton>
              <Link
                to="/auth/resetpassword"
                className="mt-2"
                // component={ResetPassword}
              >
                Forgot Password
              </Link>
              {/* )} */}
            </LinkContainer>
          </form>
        </div>
      )}
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
