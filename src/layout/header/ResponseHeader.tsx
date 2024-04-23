import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { RefObject } from "react";
import styled from "styled-components";
import CenterWrapper from "../../components/layout/CenterWrapper";
import LayoutContainer from "../../components/layout/LayoutContainer";

interface Props {
  handleResponseHeaderBar: any;
  windowRef: RefObject<HTMLDivElement>;
}

const ResponseHeader = ({ handleResponseHeaderBar, windowRef }: Props) => {
  return (
    <>
      <LayoutContainer windowRef={windowRef}>
        <ResponswBackBtnIconWrapper>
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="arrow"
            onClick={handleResponseHeaderBar}
          />
        </ResponswBackBtnIconWrapper>
        <InputSearchWrapper>
          <CenterWrapper hideOnSmallScreens="false" />
        </InputSearchWrapper>
      </LayoutContainer>
    </>
  );
};

export default ResponseHeader;

const ResponswBackBtnIconWrapper = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .arrow {
    color: white;
  }
`;

const InputSearchWrapper = styled.div`
  width: 80%;
  height: 100%;
  background-color: white;
`;
