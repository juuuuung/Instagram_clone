import { Dispatcher } from "../dto/Dispatcher.dto";
import { loginDataObj } from "../dto/loginDataObj.dto";

export function onChangeInput(
  data: loginDataObj | null,
  setData: Dispatcher<loginDataObj | null>,
  e: React.ChangeEvent<HTMLInputElement>,
  mode: string
) {
  let copyData = { ...data };
  copyData[`${mode}`] = e.target.value;
  setData(copyData);
}
