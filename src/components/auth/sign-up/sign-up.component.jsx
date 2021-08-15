import React, { useState } from "react";
// import Loading from "../share/loading/Loading.component";
import { Container, SignUpContainer } from "./sign-up.styles";
import axios from "../../../utils/axios";
import CustomButton from "../../custom-button/custom-button.component";
import FormInput from "../../form-input/form-input.component";
import { ContainerImage } from "./sign-up.styles";

const SignUp = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    password: "",
    confirmPassword: "",
    address: "",
    phoneNumber: "",
  });
  const [err, setErr] = useState(null);
  const [isSucceeded, setIsSucceeded] = useState(false);
  // const [loading, setLoading] = useState(false);
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setErr(false);
    // setLoading(true);
    if (values.confirmPassword !== values.password) {
      setErr("Password not matched");
      return;
    }
    if (!values.email) {
      setErr("Email cannot be empty");
      return;
    }
    if (!values.password) {
      setErr("Password cannot be empty");
      return;
    }
    if (!values.address) {
      setErr("Address cannot be empty");
      return;
    }
    if (!values.phoneNumber) {
      setErr("Phone Number cannot be empty");
      return;
    }
    try {
      await axios.post("/auth/sign-up", values);
      setIsSucceeded(true);
    } catch (err) {
      setErr(err.message);
    } finally {
      // setLoading(false);
    }
  };

  return (
    <Container>
      <ContainerImage></ContainerImage>
      <SignUpContainer>
        <span style={{ fontSize: 20 }}>Don't have an account?</span>

        {err && (
          <div class="alert alert-danger" role="alert">
            {err}
          </div>
        )}
        {isSucceeded && (
          <div class="alert alert-success" role="alert">
            Sign up successfully
          </div>
        )}
        <form onSubmit={handleSubmit} className="novalidate">
          <FormInput
            name="email"
            type="email"
            handleChange={handleChange}
            label="Email"
            errMessage={err}
          />
          <FormInput
            name="password"
            type="password"
            handleChange={handleChange}
            label="Password"
          />
          <FormInput
            name="confirmPassword"
            type="password"
            handleChange={handleChange}
            label="Confirm Password"
          />
          <FormInput
            name="address"
            type="text"
            handleChange={handleChange}
            label="Address"
          />
          <FormInput
            name="phoneNumber"
            type="text"
            handleChange={handleChange}
            label="Phone Number"
          />
          <div>
            {/* {loading ? ( */}
            {/* <Loading />) : ( */}
            <CustomButton type="submit" color="green">
              CREATE A NEW ACCOUNT
            </CustomButton>
            {/* )} */}
          </div>
        </form>
      </SignUpContainer>
    </Container>
  );
};

export default SignUp;
