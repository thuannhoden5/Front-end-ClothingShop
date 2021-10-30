import styled from "styled-components";
export const Container = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh);
  background-image: url("/signin.jpeg");
  background-size: cover;
`;

export const SignInContainer = styled.div`
  border: 1px solid #dadee6;
  padding: 5% 3%;
  opacity: 0.95;
  border-radius: calc(1%);
  background-color: white;
`;
export const LinkContainer = styled.div`
  display: flex;
  margin-top: 2vh;
  justify-content: space-between;
`;
export const Footer = styled.div`
  display: flex;
  justify-content: center;
`;
