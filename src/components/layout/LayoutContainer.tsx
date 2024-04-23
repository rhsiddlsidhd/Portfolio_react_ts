import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const LayoutContainer = ({ children }: PropsWithChildren) => {
  return (
    <>
      <HeaderContainer>{children}</HeaderContainer>
    </>
  );
};

export default LayoutContainer;

const HeaderContainer = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
`;
