import styled from "styled-components";

export const TabMenuItemWrapper = styled.div`
  width: 95%;
  padding-top: 0.75rem;
  padding-left: 0.75rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ece6d578;

  @media screen and (max-width: 1300px) {
    border-bottom: none;
    padding-bottom: 0;
    padding-top: 0;
    padding-left: 0;
  }
`;

export const MyTabItemWrapper = styled(TabMenuItemWrapper)`
  @media screen and (max-width: 1300px) {
    & > :nth-child(n + 2) {
      display: none;
    }
  }
`;

export const MySubscribeWrapper = styled(TabMenuItemWrapper)`
  @media screen and (max-width: 1300px) {
    display: none;
  }
`;

export const LoginTab = styled.div`
  width: fit-content;
  border: 1px solid #ece6d578;
  border-radius: 20px;
  display: flex;
  align-items: center;
  margin-top: 1rem;
  .user_icon {
    height: 1.5rem;
    padding: 0.5rem;
  }
  > div {
    padding: 0.5rem;
  }
`;

export const Quest = styled(MySubscribeWrapper)`
  > p {
    padding-bottom: 0.5rem;
    padding-left: 0.5rem;
  }
`;

export const YoutubeMore = styled(Quest)``;

export const TheMoreService = styled(MySubscribeWrapper)``;
