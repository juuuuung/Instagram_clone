import Image from "../components/atoms/Image";
import Adlist from "../components/molecules/Join/Adlist";
import Selectview from "../components/molecules/Join/Selectview";
import Foot from "../components/molecules/Join/Foot";
import Login from "../components/organisms/Join/Login";
import Signup from "../components/organisms/Join/Signup";
import { show_login } from "../store/Join";
import { useAtom } from "jotai";

import "./styles/Join.scss";

function BannerImage() {
  return (
    <div className="banner-image">
      <Image src="login/login_banner.png" />
    </div>
  );
}

export default function Join() {
  const [show] = useAtom(show_login);

  return (
    <div className="Join">
      <div className="main-view">
        {show ? <BannerImage /> : null}
        <div className="user-input">
          {show ? <Login /> : <Signup />}
          <Selectview />
          <Adlist />
        </div>
      </div>
      <div className="footer">
        <Foot />
      </div>
    </div>
  );
}
