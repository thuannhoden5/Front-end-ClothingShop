import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomButton from "../../custom-button/custom-button.component";
import FormInput from "../../form-input/form-input.component";
import {
  Container,
  FooterContainer,
  MainContainer,
  ResetContainer,
} from "./reset-password.styles";
const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const handleChange = (event) => {
    setEmail(event.target.value);
  };
  return (
    <Container>
      <ResetContainer>
        <div style={{ fontSize: 20, fontWeight: "bold" }}>
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
