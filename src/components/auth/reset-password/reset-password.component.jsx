import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CustomButton } from '../../custom-button/custom-button.component';
import FormInput from '../../form-input/form-input.component';
import axiosInstance from '../../../utils/axios';
import {
  Container,
  FooterContainer,
  MainContainer,
  ResetContainer,
} from './reset-password.styles';
import { renderErrorMessage } from '../../../utils/helpers';
const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [err, setErr] = useState('');
  const [isSucceeded, setIsSucceeded] = useState(false);
  const handleChange = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setErr(false);
    const res = await axiosInstance.post('/user/sendNewPasswordToEmail', {
      email,
    });
    console.log(res);
    if (res.success) {
      setIsSucceeded(true);
    } else {
      setErr(res.message);
    }
  };
  return (
    <Container>
      <ResetContainer>
        <div style={{ fontSize: 20, fontWeight: 'bold' }}>
          Find Your Account
        </div>
        {err && (
          <div class="alert alert-danger" role="alert">
            {renderErrorMessage(err)}
          </div>
        )}
        {isSucceeded && (
          <div class="alert alert-success" role="alert">
            Check your mail to receive new password
          </div>
        )}
        <hr />
        <MainContainer>
          <FormInput
            name="email"
            type="email"
            handleChange={handleChange}
            label="Please enter your email to search for your account"
            value={email}
          />
        </MainContainer>

        <hr />
        <FooterContainer>
          <form onSubmit={handleSubmit}>
            <CustomButton color="grey">
              <Link to="/">Cancel</Link>
            </CustomButton>
            <CustomButton color="blue">Search</CustomButton>
          </form>
        </FooterContainer>
      </ResetContainer>
    </Container>
  );
};
export default ResetPassword;
