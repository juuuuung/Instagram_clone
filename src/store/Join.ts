import { atom } from "jotai";
import { loginDataObj } from "../dto/loginDataObj.dto";

interface action {
  type: "init";
}

const signObj = {
  userId: "n",
  userPw: "n",
  realName: "n",
  nickName: "n",
};

const loginObj = {
  userId: "n",
  userPw: "n",
};

export const show_login = atom(true);

export const accountData = atom<loginDataObj | null>(loginObj);

export const setAccountData = atom(null, (get, set, action: action) => {
  if (action.type === "init") {
    set(accountData, { ...signObj });
  }
});
