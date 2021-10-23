import React from "react";
import CartDropdown from "../CartDropdown/CartDropdown.component";
import CartIcon from "../CartIcon/CartIcon.component.jsx";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Navbar.styles.scss";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { setCurrentUser } from "../../redux/user/user.actions";
// import {h}

const CustomNavbar = ({ currentUser, setCurrentUser, ...props }) => {
  // console.log("toggle cart props", props);
  // console.log(history)
  const handleClick = () => {
    setCurrentUser(null);
    localStorage.removeItem("token");
  };
  return (
    <nav
      className="navbar navbar-expand-lg  navbar-dark bg-danger "
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <Link
        className="logo-container navbar-brand"
        style={{ paddingLeft: 50 }}
        to="/"
      >
        <Logo className="logo" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse navbar-nav ml-auto"
        id="navbarNav"
        style={{ paddingLeft: "70%" }}
      >
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="option nav-link active" to="/shop">
              SHOP
            </Link>
          </li>
          <li className="nav-item">
            {currentUser ? (
              <div
                className="option nav-link active"
                onClick={() => {
                  handleClick();
                }}
              >
                SIGN OUT
              </div>
            ) : (
              <Link className="option nav-link active" to="/auth/signin">
                SIGN IN
              </Link>
            )}
          </li>
          <li className="nav-item">
            <CartIcon />
          </li>
        </ul>
      </div>
      {!props.hidden && <CartDropdown />}
    </nav>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});
const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomNavbar);
