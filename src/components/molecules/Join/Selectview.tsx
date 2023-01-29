import { useAtom } from "jotai";
import { show_login } from "../../../store/Join";
import { Dispatch, SetStateAction } from "react";

type Dispatcher<S> = Dispatch<SetStateAction<S>>;

export default function Selectview() {
  const [show, setShow]: [boolean, Dispatcher<boolean>] =
    useAtom<boolean>(show_login);
  return (
    <div className="select-view">
      <p>계정이 없으신가요?</p>
      <button
        onClick={() => {
          setShow((c) => !c);
        }}
      >
        {show ? "가입하기" : "로그인"}
      </button>
    </div>
  );
}
