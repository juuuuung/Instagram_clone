import axios from "axios";
import { useAtom } from "jotai";
import { accountData } from "../../store/Join";

interface props {
  text: string;
}

export default function Button({ text }: props) {
  const [data] = useAtom(accountData);
  console.log(data);
  return (
    <div>
      <button
        onClick={async () => {
          await axios
            .post(`http://localhost:4000/auth/${text}`, data)
            .then((res) => console.log(res));
        }}
      >
        {text}
      </button>
    </div>
  );
}
