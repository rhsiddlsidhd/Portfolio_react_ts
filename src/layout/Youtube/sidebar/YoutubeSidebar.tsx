import React from "react";
import styled from "styled-components";
import MainMenuTab from "../../../components/Youtube/sidebar/moreTab/MainMenuTab";
import MyTab from "../../../components/Youtube/sidebar/moreTab/MyTab";
import MySubscribe from "../../../components/Youtube/sidebar/moreTab/MySubscribe";
import Quest from "../../../components/Youtube/sidebar/moreTab/Quest";
import YoutubeMore from "../../../components/Youtube/sidebar/moreTab/YoutubeMore";
import TheMoreService from "../../../components/Youtube/sidebar/moreTab/TheMoreService";

const YoutubeSidebar = () => {
  return (
    <SidebarContainer>
      <MainMenuTab />
      <MyTab />
      <MySubscribe />
      <Quest />
      <YoutubeMore />
      <TheMoreService />
    </SidebarContainer>
  );
};

export default YoutubeSidebar;

const SidebarContainer = styled.div`
  width: 18rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ece6d5;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0;
  }
  &:hover {
    &::-webkit-scrollbar {
      width: 0.5rem;
    }

    &::-webkit-scrollbar-thumb {
      background: #ece6d578;
      border-radius: 20px;
    }
  }
  @media screen and (max-width: 1300px) {
    width: 5rem;
    overflow-y: auto;
  }
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
