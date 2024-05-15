import React from "react";
import styled from "styled-components";
import ResponseSidebar from "../../components/SidebarNav/ResponseSidebar";
import NonUserMainPage from "../../components/Main/NonUserMainPage";

const Main: React.FC = () => {
  return (
    <Container>
      <ResponseSidebar></ResponseSidebar>
      <YoutubeBody>
        <NonUserMainPage />
      </YoutubeBody>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  width: 100%;
  overflow: hidden;
  padding-top: ${({ theme }) => theme.height.header};
  height: 100vh;
  display: flex;
  color: white;
`;
const YoutubeBody = styled.div`
  width: 100%;
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
