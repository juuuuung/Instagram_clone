import { useAtom } from "jotai";
import { onChangeInput } from "../../../logic/onChangeInput";
import { accountData } from "../../../store/Join";
import inputMapArray from "../../../dummyData/inputMapArray.json";

export default function SignInputList() {
  const [data, setData] = useAtom(accountData);
  const onChangeFunc = (
    e: React.ChangeEvent<HTMLInputElement>,
    mode: string
  ) => {
    onChangeInput(data, setData, e, mode);
  };
  return (
    <div className="inputlist">
      {}
      <input
        onChange={(e) => {
          onChangeFunc(e, "userId");
        }}
        type="text"
        placeholder="전화번호, 사용자 이름 또는 이메일"
      />
      <input
        onChange={(e) => {
          onChangeFunc(e, "userPw");
        }}
        type="text"
        placeholder="성명"
      />
      <input
        onChange={(e) => {
          onChangeFunc(e, "realName");
        }}
        type="text"
        placeholder="사용자 이름"
      />
      <input
        onChange={(e) => {
          onChangeFunc(e, "nickName");
        }}
        type="text"
        placeholder="비밀번호"
      />
    </div>
  );
}
