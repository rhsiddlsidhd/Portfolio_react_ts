import { faTiktok, faYoutube } from "@fortawesome/free-brands-svg-icons";
import {
  faCirclePlay,
  faClock,
  faHouse,
  faList,
  faRecycle,
  faThumbsUp,
  faUser,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

import React from "react";
import styled from "styled-components";
import MenuList from "./MenuList/MenuList";

const ResponseSidebar = () => {
  const tabMenu = ["홈", "Shorts", "구독"];

  const tabIcon = [faHouse, faTiktok, faYoutube];

  const myTab = [
    "나",
    "내 채널",
    "시청 기록",
    "재생목록",
    "내동영상",
    "나중에 볼 동영상",
    "좋아요 표시한 동영상",
  ];

  const mytabIcon = [
    faCirclePlay,
    faUser,
    faRecycle,
    faList,
    faVideo,
    faClock,
    faThumbsUp,
  ];
  return (
    <Sidebar>
      <TabMenuItemWrapper>
        {tabMenu.map((menu, index) => (
          <MenuList key={index} menu={menu} icon={tabIcon[index]} />
        ))}
      </TabMenuItemWrapper>
      <MyTabItemWrapper>
        {myTab.map((menu, index) => (
          <MenuList
            key={index}
            menu={menu}
            icon={mytabIcon[index]}
            isFirstIcon={index === 0}
          />
        ))}
      </MyTabItemWrapper>
      <MySubscribe>
        <div>구독</div>
      </MySubscribe>
    </Sidebar>
  );
};

export default ResponseSidebar;

const Sidebar = styled.div`
  width: 15rem;
  height: 100rem;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  color: #ece6d5;
  @media screen and (max-width: 1300px) {
    width: 5rem;
  }
`;

const TabMenuItemWrapper = styled.div`
  width: 95%;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ece6d5;
  @media screen and (max-width: 1300px) {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

const MyTabItemWrapper = styled(TabMenuItemWrapper)`
  height: fit-content;

  @media screen and (max-width: 1300px) {
    & > :nth-child(n + 2) {
      display: none;
    }
  }
`;

const MySubscribe = styled(TabMenuItemWrapper)`
  height: 25rem;
  padding-top: 0.75rem;
  padding-left: 0.75rem;
  @media screen and (max-width: 1300px) {
    display: none;
  }
`;
