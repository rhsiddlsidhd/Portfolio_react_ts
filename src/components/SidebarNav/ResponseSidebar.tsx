import {
  faShopify,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCirclePlay,
  faCircleQuestion,
  faCircleUser,
  faClapperboard,
  faClock,
  faFire,
  faFlag,
  faGamepad,
  faGear,
  faHouse,
  faLightbulb,
  faList,
  faMusic,
  faPodcast,
  faRecycle,
  faThumbsUp,
  faTowerBroadcast,
  faTriangleExclamation,
  faTrophy,
  faUser,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

import React from "react";
import styled from "styled-components";
import MenuList from "./MenuList/MenuList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ResponseSidebar = () => {
  const youTubeMoreImgUrl = process.env.REACT_APP_IMG_PATH;

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

  const qusetTab = [
    "인기 급상승",
    "쇼핑",
    "음악",
    "영화",
    "실시간",
    "게임",
    "스포츠",
    "학습 프로그램",
    "팟캐스트",
  ];

  const quertTabIcon = [
    faFire,
    faShopify,
    faMusic,
    faClapperboard,
    faTowerBroadcast,
    faGamepad,
    faTrophy,
    faLightbulb,
    faPodcast,
  ];

  const YoutubeMoreTab = ["YouTube Premium", "YouTube Music", "Youtube Kids"];

  const YoutubeMoreTabIcon = [`youtube.png`, `music.png`, `youtube-kids.png`];

  const YoutubeMoreTabIconUrls = YoutubeMoreTabIcon.map(
    (png) => `${youTubeMoreImgUrl}/${png}`
  );

  const theMoreServiceTab = ["설정", "신고 기록", "고객센터", "의견 보내기"];

  const theMoreServiceIcon = [
    faGear,
    faFlag,
    faCircleQuestion,
    faTriangleExclamation,
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
        <p>
          로그인 하면 동영상에 좋아요를 표시하고 댓글을 달거나 구독할 수
          있습니다.
        </p>
        <LoginTab>
          <FontAwesomeIcon icon={faCircleUser} className="user_icon" />
          <div>로그인</div>
        </LoginTab>
      </MySubscribe>
      <Quest>
        <p>탐색</p>
        {qusetTab.map((menu, index) => (
          <MenuList key={index} menu={menu} icon={quertTabIcon[index]} />
        ))}
      </Quest>
      <YoutubeMore>
        <p>YouTube 더보기</p>
        {YoutubeMoreTab.map((menu, index) => (
          <MenuList
            key={index}
            menu={menu}
            imageUrl={YoutubeMoreTabIconUrls[index]}
          />
        ))}
      </YoutubeMore>
      <TheMoreService>
        {theMoreServiceTab.map((menu, index) => (
          <MenuList key={index} menu={menu} icon={theMoreServiceIcon[index]} />
        ))}
      </TheMoreService>
    </Sidebar>
  );
};

export default ResponseSidebar;

const Sidebar = styled.div`
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
`;

// test중
const TabMenuItemWrapper = styled.div`
  width: 95%;
  padding-top: 0.75rem;
  padding-left: 0.75rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ece6d578;

  @media screen and (max-width: 1300px) {
    border-bottom: none;
    padding-bottom: 0;
    padding-top: 0;
    padding-left: 0;
  }
`;

const MyTabItemWrapper = styled(TabMenuItemWrapper)`
  @media screen and (max-width: 1300px) {
    & > :nth-child(n + 2) {
      display: none;
    }
  }
`;

const MySubscribe = styled(TabMenuItemWrapper)`
  @media screen and (max-width: 1300px) {
    display: none;
  }
`;

const LoginTab = styled.div`
  width: fit-content;
  border: 1px solid #ece6d578;
  border-radius: 20px;
  display: flex;
  align-items: center;
  margin-top: 1rem;
  .user_icon {
    height: 1.5rem;
    padding: 0.5rem;
  }
  > div {
    padding: 0.5rem;
  }
`;

const Quest = styled(MySubscribe)`
  > p {
    padding-bottom: 0.5rem;
    padding-left: 0.5rem;
  }
`;

const YoutubeMore = styled(Quest)``;

const TheMoreService = styled(MySubscribe)``;
