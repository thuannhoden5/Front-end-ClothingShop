import CustomNavbar from './components/Navbar/Navbar';
import HomePage from './components/Homepage/HomePage.component';
import { Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';
import './App.css';
import SignIn from './components/auth/sign-in/sign-in.component';
import SignUp from './components/auth/sign-up/sign-up.component';
import ResetPassword from './components/auth/reset-password/reset-password.component';
import Search from './components/Search/Search.component';
import Profile from './components/profile/Profile.component';
import Shop from './components/Shop/Shop.component';
import ProductDetail from './components/ProductDetail/ProductDetail';
import CheckoutPage from './components/checkout/checkoutpage.component';
function App() {
  return (
    <div>
      <CustomNavbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/:directory" component={Shop} />
        <Route path="/product/:id" component={ProductDetail} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route exact path="/auth/signup" component={SignUp} />
        <Route exact path="/auth/signin" component={SignIn} />
        <Route exact path="/auth/resetpassword" component={ResetPassword} />
        <Route path="/search" component={Search} />
      </Switch>
    </div>
  );
}

export default App;
