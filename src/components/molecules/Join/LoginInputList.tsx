import { useAtom } from "jotai";
import { onChangeInput } from "../../../logic/onChangeInput";
import { accountData } from "../../../store/Join";

export default function LoginInputList() {
  const [data, setData] = useAtom(accountData);
  return (
    <div className="inputlist">
      <input
        onChange={(e) => {
          onChangeInput(data, setData, e, "userId");
        }}
        type="text"
        placeholder="전화번호, 사용자 이름 또는 이메일"
      />
      <input
        onChange={(e) => {
          onChangeInput(data, setData, e, "userPw");
        }}
        type="password"
        placeholder="비밀번호"
      />
    </div>
  );
}
