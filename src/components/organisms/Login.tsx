import Button from "../atoms/Button";
import Inputlist from "../molecules/Login/Inputlist";
import Image from "../atoms/Image";

export default function Login() {
  return (
    <div>
      <div>
        <Image src="login/login_banner.png" />
      </div>
      <div>
        <div>
          <div>
            <img alt="d" src="img/logo.png" />
          </div>
          <div className="Inputlist">
            <Inputlist />
          </div>
          <div className="login-btn">
            <Button text="로그인" />
          </div>
          <div className="or"></div>
          <div className="facebook-login-btn">
            <Button text="Facebook으로 로그인" />
          </div>
          <div className="forget-pw">
            <a href="#">비밀번호를 잊으셨나요?</a>
          </div>
        </div>
      </div>
    </div>
  );
}
