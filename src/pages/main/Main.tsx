import React from "react";
import styled from "styled-components";

const Main: React.FC = () => {
  return <Container></Container>;
};

export default Main;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - ${({ theme }) => theme.height.xl});

  background-color: blueviolet;
`;
