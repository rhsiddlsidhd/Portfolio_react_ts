import React from "react";
import * as S from "../sidebar/moreTab/styled/moreTab.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { auth } from "../../../redux/reducer/youtube/authSlice/AuthSlice";
const Login = () => {
  const dispatch: AppDispatch = useDispatch();

  const toggleLogin = () => {
    dispatch(auth({}));
  };
  return (
    <S.LoginTab onClick={toggleLogin}>
      <FontAwesomeIcon icon={faCircleUser} className="user_icon" />
      <div>로그인</div>
    </S.LoginTab>
  );
};

export default Login;
