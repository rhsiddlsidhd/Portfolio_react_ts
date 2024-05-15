import React from "react";
import * as S from "./styled/moreTab.styled";
import {
  faClapperboard,
  faFire,
  faGamepad,
  faLightbulb,
  faMusic,
  faPodcast,
  faTowerBroadcast,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { faShopify } from "@fortawesome/free-brands-svg-icons";
import MenuList from "../menuList/MenuList";
const Quest = () => {
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
  return (
    <S.Quest>
      <p>탐색</p>
      {qusetTab.map((menu, index) => (
        <MenuList key={index} menu={menu} icon={quertTabIcon[index]} />
      ))}
    </S.Quest>
  );
};

export default Quest;
