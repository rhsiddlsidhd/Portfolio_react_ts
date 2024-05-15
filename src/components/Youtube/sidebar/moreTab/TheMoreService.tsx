import React from "react";
import MenuList from "../menuList/MenuList";
import {
  faCircleQuestion,
  faFlag,
  faGear,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import * as S from "./styled/moreTab.styled";
const TheMoreService = () => {
  const theMoreServiceTab = ["설정", "신고 기록", "고객센터", "의견 보내기"];

  const theMoreServiceIcon = [
    faGear,
    faFlag,
    faCircleQuestion,
    faTriangleExclamation,
  ];
  return (
    <S.TheMoreService>
      {theMoreServiceTab.map((menu, index) => (
        <MenuList key={index} menu={menu} icon={theMoreServiceIcon[index]} />
      ))}
    </S.TheMoreService>
  );
};

export default TheMoreService;
