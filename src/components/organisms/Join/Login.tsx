import axios from "axios";
import Button from "../../atoms/Button";
import Image from "../../atoms/Image";
import "./styles/Login.scss";
import LoginInputList from "../../molecules/Join/LoginInputList";
import { useEffect } from "react";
import { apiKeys, setAccountData } from "../../../store/Join";
import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [data, setAccount] = useAtom(setAccountData);
  const [d, setApiKey] = useAtom(apiKeys);
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
        <button
          onClick={async () => {
            await axios
              .post(`http://localhost:4000/auth/login`, data)
              .then((res) => {
                if (res.data.access_token) {
                  setApiKey(res.data.access_token);
                  navigate(`/main`, { state: false });
                }
              })
              .catch(() => {
                alert("아이디, 비밀번호 재확인");
              });
          }}
        >
          로그인
        </button>
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
