import React from "react";
import styled from "styled-components";
import ResponseSidebar from "../../components/SidebarNav/ResponseSidebar";

const Main: React.FC = () => {
  return (
    <Container>
      <ResponseSidebar></ResponseSidebar>;
    </Container>
  );
};

export default Main;

const Container = styled.div`
  width: 100%;
  /* height: calc(100vh - ${({ theme }) => theme.height.xl}); */
  height: fit-content;

  display: flex;
`;
