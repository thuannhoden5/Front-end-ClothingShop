import React from "react";
import CartDropdown from "../CartDropdown/CartDropdown.component";
import CartIcon from "../CartIcon/CartIcon.component.jsx";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";
import { Link } from "react-router-dom";
import "./Navbar.styles.scss";
import { createStructuredSelector } from 'reselect'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'

const CustomNavbar = ({ currentUser, ...props }) => {
    // console.log("toggle cart props", props);
    // console.log(history)
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
                            auth.signOut();
                            // history.push('/')
                        }}
                    >
                        SIGN OUT
                    </div>
                ) : (
                    <Link className="option" to="/signin">
                        SIGN IN
                    </Link>
                )}
                <CartIcon />
            </div>
            {!props.hidden && <CartDropdown />}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({

    currentUser: selectCurrentUser,
    hidden: selectCartHidden

});

export default connect(mapStateToProps)(CustomNavbar);