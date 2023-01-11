import Adlist from "../components/molecules/Join/Adlist";
import Selectview from "../components/molecules/Join/Selectview";
import Login from "../components/organisms/Join/Login";
import Signup from "../components/organisms/Join/Signup";
import Image from "../components/atoms/Image";

import { show_login } from "../store/Join";
import { useAtom } from "jotai";
import Foot from "../components/molecules/Join/Foot";

import "./styles/Join.scss";

export default function Join() {
  const [show] = useAtom(show_login);

  return (
    <div className="Join">
      <div className="main-view">
        <div>
          <Image src="login/login_banner.png" />
        </div>
        <div>
          {show ? <Login /> : <Signup />}
          <Selectview />
          <div className="ad">
            <Adlist />
          </div>
        </div>
      </div>
      <div className="footer">
        <Foot />
      </div>
    </div>
  );
}
