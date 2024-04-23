import {
  faArrowLeft,
  faMagnifyingGlass,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { RefObject } from "react";
import styled from "styled-components";

interface Props {
  handleResponseHeaderBar: any;
  windowRef: RefObject<HTMLDivElement>;
}

const ResponseHeader = ({ handleResponseHeaderBar, windowRef }: Props) => {
  return (
    <>
      <ResponseLayoutHeader ref={windowRef}>
        <div>
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="arrow"
            onClick={handleResponseHeaderBar}
          />
        </div>
        <div>
          <SearchContainer>
            <InputKeywordSearchLabel>
              <input
                type="text"
                className="input_keyword_search"
                placeholder="검색"
              />
              <div className="input_keyword_search_icon_wrapper">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="input_keyword_search_icon"
                />
              </div>
            </InputKeywordSearchLabel>
            <MicroIconWrapper>
              <FontAwesomeIcon icon={faMicrophone} className="micro_icon" />
            </MicroIconWrapper>
          </SearchContainer>
        </div>
      </ResponseLayoutHeader>
    </>
  );
};

export default ResponseHeader;

const ResponseLayoutHeader = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  > div:first-child {
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .arrow {
      color: white;
    }
  }
  > div:last-child {
    width: 80%;
    height: 1005;
  }
`;

const SearchContainer = styled.div`
  display: none;
  @media screen and (max-width: 767px) {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    align-items: center;
  }
`;

const InputKeywordSearchLabel = styled.label`
  display: none;

  @media screen and (max-width: 767px) {
    display: flex;
    align-items: center;
    border: 1.5px solid gray;
    border-radius: 2rem;
    width: 90%;
    height: 80%;
    .input_keyword_search {
      width: 100%;
      height: 75%;
      border: none;
      outline: none;
      display: flex;
      color: white;
      margin-left: 1rem;

      &::placeholder {
        font-size: 1.2rem;
        display: flex;
      }
    }
    .input_keyword_search_icon_wrapper {
      width: 4rem;
      height: 100%;
      background-color: gray;
      border-top-right-radius: 2rem;
      border-bottom-right-radius: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      .input_keyword_search_icon {
        height: 60%;
        color: white;
        background-color: transparent;
      }
    }
  }
`;

const MicroIconWrapper = styled.div`
  display: none;

  @media screen and (max-width: 767px) {
    width: 3.5rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .micro_icon {
    @media screen and (max-width: 767px) {
      background-color: gray;
      border-radius: 100%;
      height: 1.25rem;
      color: white;
      padding: 0.725rem;
    }
  }
`;
