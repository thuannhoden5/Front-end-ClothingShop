import { ShopActionsTypes } from './shop.types';

export const setProducts = (products) => {
  return {
    type: ShopActionsTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProducts = (product) => {
  return {
    type: ShopActionsTypes.SELECTED_PRODUCTS,
    payload: product,
  };
};
