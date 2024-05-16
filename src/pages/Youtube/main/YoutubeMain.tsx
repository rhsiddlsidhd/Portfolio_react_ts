import React from "react";
import styled from "styled-components";
import YoutubeSidebar from "../../../layout/Youtube/sidebar/YoutubeSidebar";
import NonUserMainPage from "../../../components/Youtube/main/NonUserMainPage";
import { useSelector } from "react-redux";
import { RootReducerState } from "../../../redux/store";
import Card from "./../../../components/Youtube/card/Card";

const YoutubeMain: React.FC = () => {
  const isAuth = useSelector(
    (state: RootReducerState) => state.youtube.isAuthenticated
  );
  return (
    <Container>
      <YoutubeSidebar></YoutubeSidebar>

      {isAuth ? (
        <UserYoutubeBody>
          <Current>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </Current>
          <div>1234</div>
        </UserYoutubeBody>
      ) : (
        <NonUserYoutubeBody>
          <NonUserMainPage />
        </NonUserYoutubeBody>
      )}
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
const UserYoutubeBody = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Current = styled.div`
  width: 100%;
  height: fit-content;
  border: 1px solid white;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(5, 1fr);
`;

// const Current = styled.div`
//   width: 100%;
//   height: fit-content;
//   border: 1px solid white;
//   display: flex;
//   flex-wrap: wrap;
//   @media screen and (max-width: 767px) {
//     justify-content: center;
//   }
// `;

const NonUserYoutubeBody = styled.div`
  width: 100%;
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
