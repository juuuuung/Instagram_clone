import { Dispatch, SetStateAction } from "react";
import { Dispatcher } from "../dto/Dispatcher.dto";
import { loginDataObj } from "../dto/LoginDataObj.dto";

export const onChangeFunc = (
  data: loginDataObj,
  setData: Dispatcher<loginDataObj>,
  e: React.ChangeEvent<HTMLInputElement>,
  c: string
) => {
  let copyData = { ...data };
  copyData[`${c}`] = e.target.value;
  setData(copyData);
};
