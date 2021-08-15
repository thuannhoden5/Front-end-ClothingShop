import React from "react";
import SignIn from "../../components/auth/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import { Container } from "./sign-in-and-sign-up.styles";
const SignInAndSignUp = () => {
  return (
    <Container>
      <SignIn />
      <SignUp />
    </Container>
  );
};

export default SignInAndSignUp;
