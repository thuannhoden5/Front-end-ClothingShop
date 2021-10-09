import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../../../utils/axios';
import CustomButton from '../../custom-button/custom-button.component';
import FormInput from '../../form-input/form-input.component';
import {
  Container,
  FooterContainer,
  MainContainer,
  ResetContainer,
} from './reset-password.styles';
const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [isFound, setIsFound] = useState(false);
  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleClickSearch = async (event) => {
    const response = await axiosInstance.post('/user/sendNewPasswordToEmail', {
      email,
    });
    console.log('response here', response);
  };
  return (
    <Container>
      <ResetContainer>
        <div style={{ fontSize: 20, fontWeight: 'bold' }}>
          Find Your Account
        </div>
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
          <form>
            <CustomButton>
              <Link to="/auth/signin">Sign In</Link>
            </CustomButton>
            <div
              onClick={() => {
                handleClickSearch();
              }}
              color="blue"
            >
              Search
            </div>
          </form>
        </FooterContainer>
      </ResetContainer>
    </Container>
  );
};
export default ResetPassword;
