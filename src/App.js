import logo from "./logo.svg";
import CustomNavbar from "./components/Navbar/Navbar";
import HomePage from "./components/Homepage/HomePage.component";
import Shop from './components/Shop/Shop.component'
import { Route, Switch, Redirect } from "react-router-dom";
import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import SignIn from "./components/auth/sign-in/sign-in.component";
import SignUp from "./components/auth/sign-up/sign-up.component";
import ResetPassword from "./components/auth/reset-password/reset-password.component";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;
    return (
      <div>
        <CustomNavbar />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/auth/signup" component={SignUp} />
          <Route exact path="/auth/signin" component={SignIn} />
          <Route exact path="/auth/resetpassword" component={ResetPassword} />
          <Route path='/shop' component={Shop} />
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
