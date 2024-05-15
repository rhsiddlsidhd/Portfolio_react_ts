import {
  faCirclePlay,
  faClock,
  faList,
  faRecycle,
  faThumbsUp,
  faUser,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import * as S from "./styled/moreTab.styled";
import MenuList from "../menuList/MenuList";

const MyTab = () => {
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
    <S.MyTabItemWrapper>
      {myTab.map((menu, index) => (
        <MenuList
          key={index}
          menu={menu}
          icon={mytabIcon[index]}
          isFirstIcon={index === 0}
        />
      ))}
    </S.MyTabItemWrapper>
  );
};

export default MyTab;
