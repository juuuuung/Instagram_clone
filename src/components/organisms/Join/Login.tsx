import axios from "axios";
import Button from "../../atoms/Button";
import Image from "../../atoms/Image";
import "./styles/Login.scss";
import LoginInputList from "../../molecules/Join/LoginInputList";
import { useEffect } from "react";
import { setAccountData } from "../../../store/Join";
import { useAtom } from "jotai";

export default function Login() {
  const [, setAccount] = useAtom(setAccountData);
  useEffect(() => {
    setAccount({ type: "login" });
  }, []);

  return (
    <div className="login">
      <div className="main-logo">
        <Image src="logo.png" />
      </div>
      <LoginInputList />
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
