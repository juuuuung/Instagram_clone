import { Dispatcher } from "../dto/Dispatcher.dto";
import { loginDataObj } from "../dto/loginDataObj.dto";

export function onChangeInput(
  data: loginDataObj,
  setData: Dispatcher<loginDataObj>,
  e: React.ChangeEvent<HTMLInputElement>,
  c: string
) {
  let copyData = { ...data };
  copyData[`${c}`] = e.target.value;
  setData(copyData);
}
