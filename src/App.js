import "./App.css";
import SignIn from "./components/auth/sign-in/sign-in.component";
import Header from "./components/header/header.componet";
import { Route, Switch } from "react-router-dom";
import SignUp from "./components/auth/sign-up/sign-up.component";
import ResetPassword from "./components/auth/reset-password/reset-password.component";
function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/auth/signup" component={SignUp} />
        <Route exact path="/auth/signin" component={SignIn} />
        <Route exact path="/auth/resetpassword" component={ResetPassword} />
      </Switch>
    </>
  );
}

export default App;
