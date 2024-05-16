import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <ItemCard>
      <Thumbnail></Thumbnail>
      <InfoPanel>
        <UserImg>
          <img src="#" alt="이미지" />
        </UserImg>
        <InfoTextContainer>
          <Title>
            Carlos Alcaraz| Court Level Practice |Carlos Alcaraz| Court Level
            PracticeCarlos Alcaraz| Court Level PracticeCarlos Alcaraz| Court
            Level Practice
          </Title>
          <UserId>slow_Mo Tennis</UserId>
          <StatsContainer>
            <View>조회수</View>
            <div>•</div>
            <UploadTime>업로드시점</UploadTime>
          </StatsContainer>
        </InfoTextContainer>
      </InfoPanel>
    </ItemCard>
  );
};

export default Card;

// const ItemCard = styled.div`
//   width: 34rem;
//   height: 26rem;
//   border-radius: 20px;
//   margin-left: 1rem;
//   margin-top: 2rem;
//   &:hover {
//     background-color: gray;
//   }
//   @media screen and (max-width: 767px) {
//     max-width: 90%;
//     margin-left: 0;
//   }
// `;

const ItemCard = styled.div`
  max-width: 28rem;
  height: 26rem;
  border-radius: 20px;

  &:hover {
    background-color: gray;
  }
`;

const Thumbnail = styled.div`
  width: 100%;
  height: 70%;
  border-radius: 20px;
  border: 1px solid red;
`;

const InfoPanel = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: space-between;
`;

const UserImg = styled.div`
  width: 3rem;
  > img {
    width: 100%;
    height: 50%;
    border: 1px solid white;
    border-radius: 100%;
    margin-top: 1rem;
  }
`;

const InfoTextContainer = styled.div`
  width: 88%;
  margin-top: 1rem;
`;

const Title = styled.h3`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const UserId = styled.div`
  display: flex;
  align-items: center;
  color: #cbc6bd;
`;
const StatsContainer = styled.div`
  display: flex;
`;
const View = styled(UserId)``;
const UploadTime = styled(UserId)``;
