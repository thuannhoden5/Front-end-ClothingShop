import HomePage from './components/Homepage/HomePage.component';
import { Route, Switch } from 'react-router-dom';
import React, { useEffect, useRef } from 'react';
import './App.css';
import SignIn from './components/auth/sign-in/sign-in.component';
import SignUp from './components/auth/sign-up/sign-up.component';
import ResetPassword from './components/auth/reset-password/reset-password.component';
import Search from './components/Search/Search.component';
import Profile from './components/profile/Profile.component';
import Shop from './components/Shop/Shop.component';
import ProductDetail from './components/ProductDetail/ProductDetail';
import CheckoutPage from './components/checkout/checkoutpage.component';
import OrderDetail from './components/OrderDetail/OrderDetail';
import OrderSuccess from './components/OrderSuccess/OrderSuccess';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCartHidden } from './redux/cart/cart.actions';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/:directory" component={Shop} />
        <Route path="/product/:id" component={ProductDetail} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route exact path="/auth/signup" component={SignUp} />
        <Route exact path="/auth/signin" component={SignIn} />
        <Route exact path="/auth/resetpassword" component={ResetPassword} />
        <Route path="/checkout-success/:id" component={OrderSuccess} />
        <Route path="/order/:id" component={OrderDetail} />
        <Route path="/search" component={Search} />
      </Switch>
    </div>
  );
}

export default App;
