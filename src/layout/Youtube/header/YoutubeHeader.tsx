import {
  faBars,
  faBell,
  faMagnifyingGlass,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import YoutubeResponseHeader from "./YoutubeResponseHeader";
import LayoutContainer from "../headerContainer/YoutubeHeaderContainer";
import Search from "../../../components/Youtube/layout/Search";
import { Outlet } from "react-router-dom";

const YoutubeHeader: React.FC = () => {
  const [isResponseHeaderBar, setIsResponseHeaderBar] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const windowHeaderHeightRef = useRef<HTMLDivElement | null>(null);

  const handleResponseHeaderBar = () => {
    setIsResponseHeaderBar(!isResponseHeaderBar);
  };

  useEffect(() => {
    const reSizeCheck = () => {
      if (headerRef.current && headerRef.current.offsetWidth >= 767) {
        console.log(headerRef.current);
        setIsResponseHeaderBar(false);
      }
    };
    reSizeCheck();
    window.addEventListener("resize", reSizeCheck);
  }, [headerRef]);

  return (
    <>
      {isResponseHeaderBar && (
        <YoutubeResponseHeader
          handleResponseHeaderBar={handleResponseHeaderBar}
          headerRef={headerRef}
        />
      )}
      {!isResponseHeaderBar && (
        <LayoutContainer windowHeaderHeightRef={windowHeaderHeightRef}>
          <MenuAndLogoWrapper>
            <FontAwesomeIcon icon={faBars} className="hamburger_menu" />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png"
              alt="로고 이미지"
              className="img_logo"
            />
          </MenuAndLogoWrapper>
          <Search $isResponsiveScreen="true" />
          <ResponseInputIconWrapper>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="response_input_keyword_search_icon"
              onClick={handleResponseHeaderBar}
            />
            <MicroIconWrapper>
              <FontAwesomeIcon icon={faMicrophone} className="micro_icon" />
            </MicroIconWrapper>
          </ResponseInputIconWrapper>
          <User>
            <div className="bell_icon_wrapper">
              <FontAwesomeIcon icon={faBell} className="bell_icon" />
            </div>
            <div className="user_icon_wrapper">
              <img src="#" alt="user" className="user_icon" />
            </div>
          </User>
        </LayoutContainer>
      )}
      <Outlet />
    </>
  );
};

export default YoutubeHeader;

const MenuAndLogoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 12rem;
  height: 100%;
  margin-right: 3rem;
  .hamburger_menu {
    width: 30%;
    height: 50%;
    color: white;
  }
  .img_logo {
    width: 60%;
    height: 50%;
  }
`;

const ResponseInputIconWrapper = styled.div`
  color: white;
  height: 100%;
  display: none;
  align-items: center;

  @media screen and (max-width: 767px) {
    width: 50%;
    display: flex;
    justify-content: end;
  }

  > .response_input_keyword_search_icon {
    display: flex;
    height: 50%;
    cursor: pointer;
  }
`;

const MicroIconWrapper = styled.div`
  width: 3.5rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .micro_icon {
    background-color: gray;
    border-radius: 100%;
    height: 1.25rem;
    color: white;
    padding: 0.725rem;
    @media screen and (max-width: 767px) {
      background-color: transparent;
    }
  }
`;

const User = styled.div`
  width: 8rem;
  height: 100%;

  display: flex;
  justify-content: space-between;
  margin-left: 3rem;
  .bell_icon_wrapper {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .bell_icon {
    color: white;
    height: 50%;
  }
  .user_icon_wrapper {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    .user_icon {
      color: white;
      width: 50%;
      height: 65%;
      border-radius: 20px;
      border: 1px solid white;
    }
  }
  @media screen and (max-width: 767px) {
    margin-left: 0;
  }
`;
