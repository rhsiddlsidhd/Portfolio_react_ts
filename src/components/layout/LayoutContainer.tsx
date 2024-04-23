import React, { PropsWithChildren, RefObject } from "react";
import styled from "styled-components";

interface Props {
  windowRef?: RefObject<HTMLDivElement>;
}

const LayoutContainer = ({ windowRef, children }: PropsWithChildren<Props>) => {
  return (
    <>
      <HeaderContainer ref={windowRef}>{children}</HeaderContainer>
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
