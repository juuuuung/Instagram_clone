import Button from "../../atoms/Button";
import Inputlist from "../../molecules/Join/Login/Inputlist";
import Image from "../../atoms/Image";
import "./styles/Login.scss";

export default function Login() {
  return (
    <div className="login">
      <div className="main-logo">
        <Image src="logo.png" />
      </div>
      <Inputlist />
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
