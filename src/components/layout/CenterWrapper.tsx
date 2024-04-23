import {
  faMagnifyingGlass,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const CenterWrapper = () => {
  return (
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
  );
};

export default CenterWrapper;

const SearchContainer = styled.div`
  max-width: 50%;
  width: 50rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const InputKeywordSearchLabel = styled.label`
  width: 90%;
  height: 80%;
  display: flex;
  align-items: center;
  border: 1.5px solid gray;
  border-radius: 2rem;
  @media screen and (max-width: 767px) {
    display: none;
  }
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
