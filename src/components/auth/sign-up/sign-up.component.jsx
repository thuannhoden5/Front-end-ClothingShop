import React, { useState } from 'react';
import { Container, SignUpContainer } from './sign-up.styles';
import axiosInstance from '../../../utils/axios';
import { CustomButton } from '../../custom-button/custom-button.component';
import FormInput from '../../form-input/form-input.component';
import { ContainerImage } from './sign-up.styles';
import { setCurrentUser } from '../../../redux/user/user.actions';
import { useDispatch, useSelector } from 'react-redux';
import { renderErrorMessage } from '../../../utils/helpers';
import { Redirect } from 'react-router';

const SignUp = () => {
  const [values, setValues] = useState({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
    address: '',
    phoneNumber: '',
    role: 'buyers',
  });
  const dispatch = useDispatch();
  const [err, setErr] = useState(null);
  const [isSucceeded, setIsSucceeded] = useState(false);
  const currentUser = useSelector((state) => state.user.currentUser);
  if (currentUser) return <Redirect to="/" />;
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setErr(null);
    setIsSucceeded(false);
    const response = await axiosInstance.post('/user/register', values);

    if (response.success) {
      setIsSucceeded(true);
      localStorage.setItem('token', response.data.token);
      setTimeout(() => {
        dispatch(setCurrentUser(response.data.user));
      }, 1500);
    } else {
      setErr(response.message);
    }
  };

  return (
    <Container>
      <ContainerImage></ContainerImage>
      <SignUpContainer>
        <span style={{ fontSize: 20 }}>Don't have an account?</span>

        {err && (
          <div class="alert alert-danger" role="alert">
            {renderErrorMessage(err)}
          </div>
        )}
        {isSucceeded && (
          <div class="alert alert-success" role="alert">
            Sign up successfully
          </div>
        )}
        <form onSubmit={handleSubmit} className="novalidate">
          <FormInput
            name="firstName"
            type="firstName"
            handleChange={handleChange}
            label="First Name"
            errMessage={err}
          />
            <FormInput
            name="lastName"
            type="lastName"
            handleChange={handleChange}
            label="Last Name"
            errMessage={err}
          />
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
