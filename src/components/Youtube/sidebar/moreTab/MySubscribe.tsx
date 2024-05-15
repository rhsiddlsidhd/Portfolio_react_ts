import React from "react";
import * as S from "./styled/moreTab.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
const MySubscribe = () => {
  return (
    <S.MySubscribeWrapper>
      <p>
        로그인 하면 동영상에 좋아요를 표시하고 댓글을 달거나 구독할 수 있습니다.
      </p>
      <S.LoginTab>
        <FontAwesomeIcon icon={faCircleUser} className="user_icon" />
        <div>로그인</div>
      </S.LoginTab>
    </S.MySubscribeWrapper>
  );
};

export default MySubscribe;
