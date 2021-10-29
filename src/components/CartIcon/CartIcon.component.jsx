import React, { useEffect } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './CartIcon.styles.scss';
import { useDispatch } from 'react-redux';
import { setItem, toggleCartHidden } from '../../redux/cart/cart.actions';
import axiosInstance from '../../utils/axios';
import { useSelector } from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/cart.utils';

const CartIcon = () => {
  const total = useSelector((state) =>
    selectCartItemsCount(state.cart.cartItems),
  );
  const dispatch = useDispatch();
  const fetchCart = async () => {
    const cart = await axiosInstance.get('cart/findCart');
    dispatch(setItem(cart.data.items));
  };

  useEffect(() => {
    fetchCart();
  }, []);
  return (
    <div
      className="cart-icon"
      onClick={() => {
        dispatch(toggleCartHidden());
      }}
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{total}</span>
    </div>
  );
};

export default CartIcon;
