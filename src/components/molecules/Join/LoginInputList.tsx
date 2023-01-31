import { useAtom } from "jotai";
import { onChangeInput } from "../../../logic/onChangeInput";
import { accountData } from "../../../store/Join";

export default function LoginInputList() {
  const [data, setData] = useAtom(accountData);
  const inputMapArray = [
    {
      type: "text",
      mode: "userId",
      placeholder: "전화번호, 사용자 이름 또는 이메일",
    },
    { type: "password", mode: "userPw", placeholder: "비밀번호" },
  ];
  return (
    <div className="inputlist">
      {inputMapArray.map((input, inx) => {
        return (
          <input
            key={input.mode + inx}
            onChange={(e) => {
              onChangeInput(data, setData, e, input.mode);
            }}
            type={input.type}
            placeholder={input.placeholder}
          />
        );
      })}
    </div>
  );
}
