import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  height: calc(100vh - 80px);
  align-items: center;
  background-size: cover;
  background-image: url("https://images.unsplash.com/photo-1451680350250-2ae7d6e00f5a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80");
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
