import Button from "../atoms/Button";
import { useAtom } from "jotai";
import { show_login } from "../../Pages/Join";

export default function Selectview() {
  const [show, setShow] = useAtom<boolean>(show_login);
  return (
    <div>
      <p>계정이 없으신가요?</p>
      <Button text="가입하기" state={setShow} />
    </div>
  );
}
