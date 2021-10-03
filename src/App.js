import logo from "./logo.svg";
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
      <div>
        <CustomNavbar />

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
          <Route exact path="/auth/resetpassword" component={ResetPassword} />
          <Route exact path="/checkout" component={Checkout} />
          <Route path="/shop" component={Shop} />
          <Route path="/search" component={Search} />
        </Switch>
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
