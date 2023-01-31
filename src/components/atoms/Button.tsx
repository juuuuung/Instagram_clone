import { useAtom } from "jotai";
import { accountData } from "../../store/Join";

interface props {
  text: string;
}

export default function Button({ text }: props) {
  return (
    <div>
      <button>{text}</button>
    </div>
  );
}
