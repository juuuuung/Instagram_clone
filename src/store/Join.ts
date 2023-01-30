import { atom } from "jotai";

interface action {
  type: "login" | "sign";
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

export const accountData = atom(loginObj);

export const setAccountData = atom(
  (get) => get(accountData),
  (get, set, action: action) => {
    if (action.type === "sign") {
      set(accountData, { ...signObj });
    } else {
      set(accountData, { ...loginObj });
    }
  }
);
