import React from 'react';
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

const CheckoutPage = () => {
  const cartDetail = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  console.log(cartDetail);

  const handleClearItem = (event) => {
    const productId = event.target.parentNode.parentNode.parentNode.id;
    dispatch(clearItemFromCart(productId));
  };

  const handleChangeQuantity = (event) => {
    const productId = event.target.parentNode.parentNode.parentNode.id;
    if (event.target.textContent === '+') {
      console.log('here');
      dispatch(
        addItem({
          product: cartDetail.find(
            (cartItem) => cartItem.product._id === productId,
          ).product,
          quantity: 1,
        }),
      );
    } else {
      dispatch(
        removeItem({
          product: cartDetail.find(
            (cartItem) => cartItem.product._id === productId,
          ).product,
        }),
      );
    }
  };
  return (
    <div className="checkout-page">
      <div className="section-left">
        <h4 className="mb-3">Billing address</h4>
        <form className="needs-validation" novalidate>
          <div className="row g-3">
            <div className="col-sm-6">
              <label for="firstName" className="form-label">
                First name<span class="jss36">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                placeholder=""
                // value=""
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
                className="form-control"
                id="lastName"
                placeholder=""
                // value=""
                required
              />
              <div className="invalid-feedback">Last name is required.</div>
            </div>

            <div className="col-6">
              <label for="email" className="form-label">
                Phone Number<span class="jss36">*</span>
              </label>
              <input type="email" className="form-control" id="email" />
            </div>

            <div className="col-6">
              <label for="email" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" id="email" />
            </div>

            <div className="col-12">
              <label for="address" className="form-label">
                Address<span class="jss36">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                required
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
                id="zip"
                placeholder=""
                required
              />
              <div className="invalid-feedback">Zip code required.</div>
            </div>
          </div>

          <h4 className="mb-3">Payment</h4>

          <div className="my-3">
            <div className="form-check">
              <input
                id="credit"
                name="paymentMethod"
                type="radio"
                className="form-check-input"
                required
              />
              <label className="form-check-label" for="credit">
                Credit card
              </label>
            </div>
          </div>

          <div className="my-3">
            <div className="form-check">
              <input
                id="credit"
                name="paymentMethod"
                type="radio"
                className="form-check-input"
                required
              />
              <label className="form-check-label" for="credit">
                Payment when delivery
              </label>
            </div>
          </div>

          <hr className="my-4" />

          <button className="w-100 btn btn-primary btn-lg" type="submit">
            Continue to checkout
          </button>
        </form>
      </div>
      <div className="section-right">
        <h4> Your Cart </h4>
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
                      {cartItem.product.price}.000
                    </span>
                  </div>
                </div>
              </li>
            );
          })}

          <li className="list-group-item d-flex justify-content-between">
            <span>Total (USD)</span>
            {/* <strong>${total}</strong> */}
          </li>
        </ul>

        <form className="card p-2">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Promo code"
            />
            <button type="submit" className="btn btn-secondary">
              Redeem
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
