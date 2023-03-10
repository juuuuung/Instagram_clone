import { useAtom } from "jotai";
import { useEffect } from "react";
import { accountData, setAccountData } from "../../../store/Join";
import Button from "../../atoms/Button";
import Image from "../../atoms/Image";
import Or from "../../atoms/Or";
import Text from "../../atoms/Text";
import axios from "axios";
import SignInputList from "../../molecules/Join/SignInputList";

import "./styles/Signup.scss";

export default function Signup() {
  const [data, setAccount] = useAtom(setAccountData);
  useEffect(() => {
    setAccount({ type: "sign" });
  }, []);
  return (
    <div className="signup">
      <div className="main-logo">
        <Image src="logo.png" />
      </div>
      <div className="main-text">
        <Text text="친구들의 사진과 동영상을 보려면 가입하세요." />
      </div>
      <div className="facebook-login-btn">
        <Button text="Facebook으로 로그인" />
      </div>
      <Or />
      <SignInputList />
      <div className="sub-text">
        <Text text="저희 서비스를 이용하는 사람이 회원님의 연락처 정보를 Instagram에 업로드했을 수도 있습니다. 더 알아보기" />
      </div>
      <div className="signup-btn">
        <button
          onClick={async () => {
            await axios
              .post(`http://localhost:4000/auth/signup`, data)
              .then((res) => alert(res.data.msg))
              .catch((err) => console.log(err));
          }}
        >
          가입
        </button>
      </div>
    </div>
  );
}
