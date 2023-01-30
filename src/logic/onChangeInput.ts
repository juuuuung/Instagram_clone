import { Dispatch, SetStateAction } from "react";
import { LoginDataObj } from "../dto/LoginDataObj";

export const onChangeFunc = (
  data: LoginDataObj,
  setData: Dispatch<SetStateAction<LoginDataObj>>,
  e: React.ChangeEvent<HTMLInputElement>,
  c: string
) => {
  let copyData = { ...data };
  copyData[`${c}`] = e.target.value;
  setData(copyData);
};
