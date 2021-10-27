import React, { useEffect, useState } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './CartIcon.styles.scss';
import { useDispatch } from 'react-redux';
import { setItem, toggleCartHidden } from '../../redux/cart/cart.actions';
import axiosInstance from '../../utils/axios';

const CartIcon = () => {
  const dispatch = useDispatch();
  const [total, setTotal] = useState();

  const fetchCart = async () => {
    console.log('here', toggleCartHidden());
    const cart = await axiosInstance.get('cart/findCart');
    setTotal(
      cart.data.items.reduce((sum, item) => {
        return (sum += item.quantity);
      }, 0),
    );
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
