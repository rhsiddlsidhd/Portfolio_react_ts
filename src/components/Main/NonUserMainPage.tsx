import React from "react";
import styled from "styled-components";

const NonUserMainPage: React.FC = () => {
  return (
    <NonUser>
      <InitionText>
        <h1>검색하여 시작하기</h1>
        <p>
          내가 좋아할 만한 동영상 피드를 받을 수 있도록 동영상 시청을 시작해
          보세요.
        </p>
      </InitionText>
    </NonUser>
  );
};

export default NonUserMainPage;

const NonUser = styled.div`
  width: 35rem;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: #ece6d524;
  @media screen and (max-width: 1300px) {
    width: 75%;
  }
`;

const InitionText = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  height: 80%;
  justify-content: space-evenly;
  align-items: center;
  word-break: keep-all;
  @media screen and (max-width: 1300px) {
    width: 75%;
  }
`;
