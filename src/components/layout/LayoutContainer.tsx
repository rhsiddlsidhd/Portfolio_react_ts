import React, { PropsWithChildren, RefObject } from "react";
import styled from "styled-components";

interface Props {
  headerRef?: RefObject<HTMLDivElement>;
  // headerHeightRef?: RefObject<HTMLDivElement>;
  windowHeaderHeightRef?: RefObject<HTMLDivElement>;
}

const LayoutContainer = ({
  headerRef,
  children,
  windowHeaderHeightRef,
}: PropsWithChildren<Props>) => {
  return (
    <>
      <HeaderContainer ref={headerRef || windowHeaderHeightRef}>
        {children}
      </HeaderContainer>
    </>
  );
};

export default LayoutContainer;

const HeaderContainer = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.height.xl};
  /* height: 5rem; */
  display: flex;
  justify-content: space-between;
  border: 1px solid red;
`;
