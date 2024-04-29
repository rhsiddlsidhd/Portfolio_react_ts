import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";
import styled from "styled-components";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
interface MenuListProps {
  menu: string; // 메뉴 이름
  icon: IconDefinition; // 아이콘 정의
  isFirstIcon?: boolean;
}

const MenuList = ({ menu, icon, isFirstIcon }: MenuListProps) => {
  return (
    <MenuListItem>
      <StyledIcon icon={icon} isFirstIcon={isFirstIcon} />
      <div className="menu_text">{menu}</div>
    </MenuListItem>
  );
};

export default MenuList;

const MenuListItem = styled.div`
  display: flex;
  align-items: center;
  background-color: pink;
  padding: 0.75rem;
  border-radius: 3%;
  margin-top: 1.5rem;
  white-space: nowrap;
  text-overflow: ellipsis;

  & > .menu_text {
    margin-left: 0.5rem;
    @media screen and (max-width: 1300px) {
      margin-left: 0;
    }
  }

  @media screen and (max-width: 1300px) {
    flex-direction: column;
  }
`;

const StyledIcon = styled(FontAwesomeIcon)<{ isFirstIcon?: boolean }>`
  display: ${({ isFirstIcon }) => (isFirstIcon ? "none" : "block")};
`;
