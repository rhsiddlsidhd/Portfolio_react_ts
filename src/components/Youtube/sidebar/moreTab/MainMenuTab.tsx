import { faTiktok, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import * as S from "./styled/moreTab.styled";
import MenuList from "../menuList/MenuList";

const MainMenuTab = () => {
  const mainMenu = ["홈", "Shorts", "구독"];

  const mainMenuIcon = [faHouse, faTiktok, faYoutube];

  return (
    <S.TabMenuItemWrapper>
      {mainMenu.map((menu, index) => (
        <MenuList key={index} menu={menu} icon={mainMenuIcon[index]} />
      ))}
    </S.TabMenuItemWrapper>
  );
};

export default MainMenuTab;
