import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";
import styled from "styled-components";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
interface MenuListProps {
  menu: string; // 메뉴 이름
  icon: IconDefinition; // 아이콘 정의
  isFirstIcon?: boolean;
}

const MenuList = ({ menu, icon, isFirstIcon }: MenuListProps) => {
  return (
    <MenuListItem>
      <StyledIcon icon={icon} $isFirstIcon={isFirstIcon} />
      {isFirstIcon ? (
        <>
          <div className="menu_text">{menu}</div>
          <div className="faChevronRight_wrapper">
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </>
      ) : (
        <div className="menu_text">{menu}</div>
      )}
    </MenuListItem>
  );
};

export default MenuList;

const MenuListItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem;
  border-radius: 10px;
  margin-top: 1.5rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
  /* justify-content: center; */
  &:hover {
    background-color: #272727;
  }

  .menu_text {
    margin-right: 1rem;
    @media screen and (max-width: 1300px) {
      margin-right: 0;
    }
  }

  .faChevronRight_wrapper {
    @media screen and (max-width: 1300px) {
      display: none;
    }
  }

  @media screen and (max-width: 1300px) {
    flex-direction: column;
  }
`;

const StyledIcon = styled(FontAwesomeIcon)<{ $isFirstIcon?: boolean }>`
  display: ${({ $isFirstIcon }) => ($isFirstIcon ? "none" : "block")};
  margin-right: 1.25rem;

  @media screen and (max-width: 1300px) {
    display: block;
    margin-right: 0;
  }
`;
