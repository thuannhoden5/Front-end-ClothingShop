import CustomNavbar from "./components/Navbar/Navbar";
import HomePage from "./components/Homepage/HomePage.component";
import Shop from "./components/Shop/Shop.component";
import { Route, Switch, Redirect } from "react-router-dom";
import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import SignIn from "./components/auth/sign-in/sign-in.component";
import SignUp from "./components/auth/sign-up/sign-up.component";
import ResetPassword from "./components/auth/reset-password/reset-password.component";
import Checkout from "./components/checkout/Checkout.component";
import Search from "./components/Search/Search.component";
import Profile from "./components/profile/Profile.component";
import Article from "./components/article/Article.component";
import CheckoutPage from "./components/checkout/checkoutpage.component";
import Contact from "./components/contact/Contact.component";
import Picture from "./components/picture/picture.components";
class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    // setCurrentUser(localStorage.getItem("user"));
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    console.log(this.props.currentUser);
    return (
      <div className="d-flex flex-column ">
        <div className=" ">
          <CustomNavbar />
        </div>

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/profile" component={Profile} />
          <Route
            exact
            path="/auth/signup"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignUp />
            }
          />
          <Route
            exact
            path="/auth/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignIn />
            }
          />
          <Route exact path="/checkoutpage" component={CheckoutPage} />
          <Route exact path="/auth/resetpassword" component={ResetPassword} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route path="/shop" component={Shop} />
          <Route path="/search" component={Search} />
          <Route path="/image" component={Picture} />
          <Picture />
        </Switch>
        <Contact />
        {/* <div className="h-10 mg-10">
          <footer className="footer bg-light  py-1 mb-0 ">
            <div className="container">
              <span className="text-muted"> &copy; YelpCamp 2020</span>
            </div>
          </footer>
        </div> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: selectCurrentUser(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
