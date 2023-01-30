import { SetStateAction } from "jotai";
import { Dispatch } from "react";

type Obj = {
  [index: string]: string;
};

export const onChangeFunc = (
  data: Obj,
  setData: Dispatch<SetStateAction<Obj>>,
  e: React.ChangeEvent<HTMLInputElement>,
  c: string
) => {
  let copyData = { ...data };
  copyData[`${c}`] = e.target.value;
  setData(copyData);
};
