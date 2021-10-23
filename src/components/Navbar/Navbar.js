import React from 'react';
import CartDropdown from '../CartDropdown/CartDropdown.component';
import CartIcon from '../CartIcon/CartIcon.component.jsx';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { connect, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Navbar.styles.scss';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { setCurrentUser } from '../../redux/user/user.actions';

const CustomNavbar = ({ currentUser, setCurrentUser, ...props }) => {
  const hidden = useSelector((state) => state.cart.hidden);
  console.log(hidden);

  const handleClick = () => {
    setCurrentUser(null);
    localStorage.removeItem('token');
  };
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>

        {currentUser ? (
          <div
            className="option"
            onClick={() => {
              handleClick();
            }}
          >
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/auth/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden && <CartDropdown />}
    </div>
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
