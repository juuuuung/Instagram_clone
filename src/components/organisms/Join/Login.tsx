import React, { useEffect } from "react";
import axios from "axios";
import Button from "../../atoms/Button";
import Image from "../../atoms/Image";
import "./styles/Login.scss";

export default function Login() {
  return (
    <div className="login">
      <div className="main-logo">
        <Image src="logo.png" />
      </div>
      <div className="inputlist">
        <input type="text" placeholder="전화번호, 사용자 이름 또는 이메일" />
        <input type="password" placeholder="비밀번호" />
      </div>
      <div className="login-btn">
        <Button text="로그인" />
      </div>
      <div className="or">또는</div>
      <div className="facebook-login-btn">
        <Button text="Facebook으로 로그인" />
      </div>
      <div className="forget-pw">
        <a href="#">비밀번호를 잊으셨나요?</a>
      </div>
    </div>
  );
}
