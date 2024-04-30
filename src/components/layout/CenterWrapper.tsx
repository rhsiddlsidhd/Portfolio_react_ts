import {
  faMagnifyingGlass,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled, { css } from "styled-components";

interface Props {
  $isResponsiveScreen: string;
}

const CenterWrapper = ({ $isResponsiveScreen }: Props) => {
  const [isValue, setIsValue] = useState("");

  const handleIsValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target);
    setIsValue(e.target.value);
  };

  return (
    <SearchContainer $responsive={$isResponsiveScreen}>
      <InputKeywordSearchLabel
        $responsive={$isResponsiveScreen}
        $isInputValue={isValue.length > 0}
      >
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="hide_search_icon"
        />
        <input
          type="text"
          className="input_keyword_search"
          placeholder="검색"
          onChange={(e) => handleIsValue(e)}
          value={isValue}
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

const SearchContainer = styled.div<{ $responsive?: string }>`
  max-width: 50%;
  width: 50rem;

  display: flex;
  justify-content: end;
  align-items: center;

  ${({ $responsive }) =>
    $responsive &&
    $responsive === "false" &&
    css`
      @media screen and (max-width: 767px) {
        max-width: 100%;
        height: 100%;
      }
    `}

  ${({ $responsive }) =>
    $responsive &&
    $responsive === "true" &&
    css`
      @media screen and (max-width: 767px) {
        display: none;
      }
    `}
`;

/**
 * input의 유효성이 true일때
 * 현재 라벨 총 사이즈 35rem
 * 증가해야할 사이즈 3rem
 *
 * label의 사이즈 증가
 * icon none 에서 block 처리
 * input_keyword_search 의 margin-left: 0 처리
 *
 */

const InputKeywordSearchLabel = styled.label<{
  $responsive: string;
  $isInputValue: boolean;
}>`
  width: ${({ $isInputValue }) => ($isInputValue ? "85%" : "80%")};
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: end;
  border: 1.5px solid gray;
  border-radius: 2rem;

  .hide_search_icon {
    display: ${({ $isInputValue }) => ($isInputValue ? "flex" : "none")};
    color: white;
    width: 5%;
    height: 60%;
    justify-content: center;
    align-content: center;
    padding: 0.725rem;
  }

  ${({ $responsive }) =>
    $responsive &&
    $responsive === "true" &&
    css`
      @media screen and (max-width: 767px) {
        display: none;
      }
    `}

  .input_keyword_search {
    width: 85%;
    height: 75%;
    border: none;
    outline: none;
    display: flex;
    color: white;
    background-color: ${({ theme }) => theme.bgc.main};

    /* 유효성검사시 0rem 으로 전환 */
    margin-left: ${({ $isInputValue }) => ($isInputValue ? "0rem" : "1rem")};

    &::placeholder {
      font-size: 1.2rem;
      display: flex;
    }
  }
  .input_keyword_search_icon_wrapper {
    min-width: 4rem;
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
