import { useAtom } from "jotai";
import { onChangeInput } from "../../../logic/onChangeInput";
import { accountData } from "../../../store/Join";
import InputTypeObject from "../../../dummyData/inputTypeArray.json";

export default function SignInputList() {
  const [data, setData] = useAtom(accountData);
  const inputData = [
    InputTypeObject["userId"],
    InputTypeObject["userPw"],
    InputTypeObject["realName"],
    InputTypeObject["nickName"],
  ];
  return (
    <div className="inputlist">
      {inputData.map((val, inx) => {
        return (
          <input
            key={val.mode + inx}
            onChange={(e) => {
              onChangeInput(data, setData, e, val.mode);
            }}
            type={val.type}
            placeholder={val.placeholder}
          />
        );
      })}
    </div>
  );
}
