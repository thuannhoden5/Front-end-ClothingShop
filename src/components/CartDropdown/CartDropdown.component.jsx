import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import CartItem from "../CartItem/CartItem.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { withRouter } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import "./CartDropdown.styles.scss";

const CartDropDown = ({ cartItems, ...props }) => {
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
        className={`${cartItems.length === 0 ? "empty-cart" : ""} cart-items`}
      >
        {!cartItems.length ? (
          <EmptyPage />
        ) : (
          cartItems.map((item) => {
            return <CartItem key={item.id} item={item} />;
          })
        )}
      </div>
      <Link
        onClick={props.toggleCartHidden}
        className="checkout-link"
        to="/checkout"
      >
        <CustomButton>GO TO CHECKOUT</CustomButton>
      </Link>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    cartItems: selectCartItems(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCartHidden: () => dispatch(toggleCartHidden()),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropDown)
);
