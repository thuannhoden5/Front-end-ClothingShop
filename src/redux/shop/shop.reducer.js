import { ShopActionsTypes } from './shop.types';
const INITIAL_STATE = {
  products: [],
  selectedProduct: {},
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionsTypes.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case ShopActionsTypes.SELECTED_PRODUCTS:
      return {
        ...state,
        selectedProduct: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
