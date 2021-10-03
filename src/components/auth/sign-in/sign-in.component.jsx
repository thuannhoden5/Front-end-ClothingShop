import React, { useState } from "react";
import CustomButton from "../../custom-button/custom-button.component";
import FormInput from "../../form-input/form-input.component";
import { Container } from "./sign-in.styles";
import Loading from "../../share/loading/Loading.component";
import { SignInContainer, LinkContainer, Footer } from "./sign-in.styles";
import { Link } from "react-router-dom";
import ResetPassword from "../reset-password/reset-password.component";
import { connect } from "react-redux";
import { setCurrentUser } from "../../../redux/user/user.actions";
import { selectCurrentUser } from "../../../redux/user/user.selectors";
import axiosInstance from "../../../utils/axios";
// import axios from "axios";

const SignIn = (props) => {
  console.log(props);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [err, setErr] = useState("");
  const [isSucceeded, setIsSucceeded] = useState(false);
  // const [loading, setLoading] = useState(false);
  const handleChange = (event) => {
    const { value, name } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setErr(false);
    // setLoading(true);
    if (!values.email || !values.password) {
      setErr("Email & password cannot be empty");
      return;
    }

    axiosInstance
      .post("/user/login", values)
      .then((res) => {
        console.log(res.data);
        if (res.data.success) {
          setIsSucceeded(true);
          console.log(res.data);
          localStorage.setItem("token", res.data.data.token);
          props.setCurrentUser(res.data.data.user);
        } else {
          setErr(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Container>
      <SignInContainer>
        <h2>I already have an account</h2>
        <span>Sign In with email and password</span>
        {err && (
          <div class="alert alert-danger" role="alert">
            {err}
          </div>
        )}
        <form onSubmit={handleSubmit} className="novalidate">
          <FormInput
            name="email"
            type="email"
            handleChange={handleChange}
            label="Email"
            errMessage={err}
            value={values.email}
          />
          <FormInput
            name="password"
            type="password"
            handleChange={handleChange}
            label="Password"
            value={values.password}
          />
          <LinkContainer>
            {/* {loading ? (
            <Loading />
          ) : ( */}
            <CustomButton type="submit" color="blue">
              SIGN IN
            </CustomButton>
            <Link
              to="/auth/resetpassword"
              className="mt-2"
              // component={ResetPassword}
            >
              Forgot Password
            </Link>
            {/* )} */}
          </LinkContainer>
        </form>
        <hr />
        <Footer>
          <Link to="/auth/signup">
            <CustomButton color="green">Create A New Account</CustomButton>
          </Link>
        </Footer>
      </SignInContainer>
    </Container>
  );
};
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

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
