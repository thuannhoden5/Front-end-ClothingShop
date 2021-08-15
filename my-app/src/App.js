import logo from './logo.svg';
import CustomNavbar from './components/Navbar/Navbar';
import HomePage from './components/Homepage/HomePage.component'
// import Navbar from './Components/Navbar/Navbar.component'
// import Shop from './Components/Shop/Shop.component'
// import Onboarding from './Components/Onboarding/Onboarding.component'
// import CheckoutPage from './Components/Checkout/Checkout.component'
import { Route, Switch, Redirect } from 'react-router-dom'
import React from 'react';
import './App.css';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selectors'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props


    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // console.log('user auth' , userAuth)
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          //  console.log('user on app state', this.state)
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props
    return (
      <div>
        <CustomNavbar />
        <HomePage/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: selectCurrentUser(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
