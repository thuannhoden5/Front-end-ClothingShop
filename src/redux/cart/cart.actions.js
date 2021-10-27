import CartActionTypes from './cart.types';

export const toggleCartHidden = (item) => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});
export const clearItemFromCart = (productId) => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: productId,
});

export const removeItem = (item) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
});

export const setItem = (items) => ({
  type: CartActionTypes.SET_ITEM,
  payload: items,
});
