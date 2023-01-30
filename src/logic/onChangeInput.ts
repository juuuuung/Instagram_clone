import { Dispatch, SetStateAction } from "react";
import { loginDataObj } from "../dto/LoginDataObj.dto";

export const onChangeFunc = (
  data: loginDataObj,
  setData: Dispatch<SetStateAction<loginDataObj>>,
  e: React.ChangeEvent<HTMLInputElement>,
  c: string
) => {
  let copyData = { ...data };
  copyData[`${c}`] = e.target.value;
  setData(copyData);
};
