import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "../../atoms/Button";
import Image from "../../atoms/Image";
import "./styles/Login.scss";
import LoginInputList from "../../molecules/Join/LoginInputList";
import { loginDataObj } from "../../../dto/LoginDataObj.dto";

export default function Login() {
  const [data, setData] = useState<loginDataObj>({
    userId: "n",
    userPw: "n",
  });
  const onChangeFunc = (e: React.ChangeEvent<HTMLInputElement>, c: string) => {
    let copyData = { ...data };
    copyData[`${c}`] = e.target.value;
    setData(copyData);
  };
  return (
    <div className="login">
      <div className="main-logo">
        <Image src="logo.png" />
      </div>
      <div className="inputlist">
        <LoginInputList data={data} setData={setData} />
        <input
          onChange={(e) => {
            onChangeFunc(e, "userId");
          }}
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
        <input
          onChange={(e) => {
            onChangeFunc(e, "userPw");
          }}
          type="password"
          placeholder="비밀번호"
        />
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
