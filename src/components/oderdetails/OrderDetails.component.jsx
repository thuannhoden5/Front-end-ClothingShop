import React, { useEffect } from "react";

const OrderDetails = () => {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    // call api
    // setCartItems
  });
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
  </div>;
};

export default OrderDetails;
