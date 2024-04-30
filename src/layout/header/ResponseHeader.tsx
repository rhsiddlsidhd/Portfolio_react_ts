import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { RefObject } from "react";
import styled from "styled-components";
import CenterWrapper from "../../components/Layout/CenterWrapper";
import LayoutContainer from "../../components/Layout/LayoutContainer";

interface Props {
  handleResponseHeaderBar: any;
  headerRef: RefObject<HTMLDivElement>;
}

const ResponseHeader = ({ handleResponseHeaderBar, headerRef }: Props) => {
  return (
    <>
      <LayoutContainer headerRef={headerRef}>
        <ResponswBackBtnIconWrapper>
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="arrow"
            onClick={handleResponseHeaderBar}
          />
        </ResponswBackBtnIconWrapper>
        <InputSearchWrapper>
          <CenterWrapper $isResponsiveScreen="false" />
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
`;
