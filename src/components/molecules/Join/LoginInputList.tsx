import { useAtom } from "jotai";
import { onChangeInput } from "../../../logic/onChangeInput";
import { accountData } from "../../../store/Join";
import inputMapArray from "../../../dummyData/inputMapArray.json";

export default function LoginInputList() {
  const [data, setData] = useAtom(accountData);
  const inputData = [inputMapArray.userId, inputMapArray.userPw];
  return (
    <div className="inputlist">
      {inputData.map((input, inx) => {
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
