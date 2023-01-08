import Adlist from "../components/molecules/Adlist";
import Selectview from "../components/molecules/Selectview";
import Login from "../components/organisms/Login";
import Signup from "../components/organisms/Signup";
import { atom, useAtom } from "jotai";

export const show_login = atom(true);

export default function Join() {
  const [show] = useAtom(show_login);
  return (
    <div>
      {show ? <Login /> : <Signup />}
      <div>
        <Selectview />
      </div>
      <div className="ad">
        <Adlist />
      </div>
    </div>
  );
}
