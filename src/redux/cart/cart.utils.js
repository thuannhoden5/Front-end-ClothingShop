export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = checkExistedCartItem(
    cartItems,
    cartItemToAdd.product,
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.product._id === cartItemToAdd.product._id
        ? { ...cartItem, quantity: cartItem.quantity + cartItemToAdd.quantity }
        : cartItem,
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: cartItemToAdd.quantity }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.product._id === cartItemToRemove.product._id,
  );
  if (existingCartItem.quantity === 1) {
    return cartItems.filter(
      (cartItem) => cartItem.product._id !== cartItemToRemove.product._id,
    );
  }
  return cartItems.map((cartItem) =>
    cartItem.product._id === cartItemToRemove.product._id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem,
  );
};

export const checkExistedCartItem = (cartItems, itemWantToCheck) => {
  return cartItems.some(
    (cartItem) => cartItem.product._id === itemWantToCheck._id,
  );
};

export const selectCartItemsCount = (cartItems) =>
  cartItems.reduce((sum, cartItem) => sum + cartItem.quantity, 0);
