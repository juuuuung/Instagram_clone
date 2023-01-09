import Adlist from "../components/molecules/Login/Adlist";
import Selectview from "../components/molecules/Login/Selectview";
import Login from "../components/organisms/Login";
import Signup from "../components/organisms/Signup";

import { show_login } from "../store/Join";
import { useAtom } from "jotai";

export default function Join() {
  const [show] = useAtom(show_login);

  return (
    <div>
      <div>{show ? <Login /> : <Signup />}</div>
      <div>
        <Selectview />
      </div>
      <div className="ad">
        <Adlist />
      </div>
    </div>
  );
}
