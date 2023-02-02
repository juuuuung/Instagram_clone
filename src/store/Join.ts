import { atom } from "jotai";
import { loginDataObj } from "../dto/loginDataObj.dto";

interface action {
  type: "sign" | "login";
}

const signObj = {
  userId: null,
  userPw: null,
  realName: null,
  nickName: null,
};

const loginObj = {
  userId: null,
  userPw: null,
};

export const show_login = atom(true);

export const apiKeys = atom("");

export const accountData = atom<loginDataObj>(loginObj);
export const setAccountData = atom(
  (get) => get(accountData),
  (get, set, action: action) => {
    if (action.type === "sign") {
      set(accountData, { ...signObj });
    } else if (action.type === "login") {
      set(accountData, { ...loginObj });
    }
  }
);
