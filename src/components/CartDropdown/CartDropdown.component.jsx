import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CartItem from '../CartItem/CartItem.component';

import { CustomButton } from '../custom-button/custom-button.component';
import './CartDropdown.styles.scss';
import { useDispatch } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropDown = ({ cartItems, ...props }) => {
  const cartDetail = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  console.log('cartDetail here', cartDetail);

  const EmptyPage = () => {
    return (
      <div className="empty">
        <h3>Empty</h3>
      </div>
    );
  };

  return (
    <div className="cart-dropdown">
      <div
        className={`${cartDetail.length === 0 ? 'empty-cart' : ''} cart-items`}
      >
        {!cartDetail.length ? (
          <EmptyPage />
        ) : (
          cartDetail.map((item) => {
            return <CartItem key={item._id} item={item} />;
          })
        )}
      </div>
      <Link className="checkout-link" to="/checkout">
        <CustomButton onClick={() => dispatch(toggleCartHidden())}>
          GO TO CHECKOUT
        </CustomButton>
      </Link>
    </div>
  );
};

export default CartDropDown;
