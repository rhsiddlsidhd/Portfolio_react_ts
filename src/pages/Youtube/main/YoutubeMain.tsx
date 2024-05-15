import React from "react";
import styled from "styled-components";
import YoutubeSidebar from "../../../layout/Youtube/sidebar/YoutubeSidebar";
import NonUserMainPage from "../../../components/Youtube/main/NonUserMainPage";

const YoutubeMain: React.FC = () => {
  return (
    <Container>
      <YoutubeSidebar></YoutubeSidebar>
      <YoutubeBody>
        <NonUserMainPage />
      </YoutubeBody>
    </Container>
  );
};

export default YoutubeMain;

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
