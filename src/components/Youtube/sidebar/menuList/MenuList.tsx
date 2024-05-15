import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";
import styled from "styled-components";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
interface MenuListProps {
  menu: string;
  icon?: IconDefinition;
  imageUrl?: string;
  isFirstIcon?: boolean;
}

const MenuList = ({ menu, icon, imageUrl, isFirstIcon }: MenuListProps) => {
  return (
    <MenuListItem>
      {icon && <StyledIcon icon={icon} $isFirstIcon={isFirstIcon} />}
      {imageUrl && <img src={imageUrl} alt="이미지" />}
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

  cursor: pointer;
  &:hover {
    background-color: #272727;
  }

  > img {
    height: 1.5rem;
    margin-right: 1.25rem;
  }
  .menu_text {
    margin-right: 1rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
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
    padding: 1.5rem;
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
