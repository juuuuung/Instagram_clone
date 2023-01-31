import { atom } from "jotai";
import { loginDataObj } from "../dto/loginDataObj.dto";

interface action {
  type: "sign" | "login";
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
  if (action.type === "sign") {
    set(accountData, { ...signObj });
  } else if (action.type === "login") {
    set(accountData, { ...loginObj });
  }
});
