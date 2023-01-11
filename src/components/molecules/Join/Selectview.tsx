import Button from "../../atoms/Button";
import { useAtom } from "jotai";
import { show_login } from "../../../store/Join";

export default function Selectview() {
  const [show, setShow] = useAtom<boolean>(show_login);
  return (
    <div className="select-view">
      <p>계정이 없으신가요?</p>
      <Button text={show ? "가입하기" : "로그인"} state={setShow} />
    </div>
  );
}
