// 가상 데이타
import { authData } from "@database";

// login 비동기 통신
export const loginFetch = (payload: any) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const { nickName } = authData;
      resolve({ id: payload.id, nickName: nickName });
    }, 1000);
  });
};

// auth 비동기 통신
export const authFetch = (payload: any) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const { nickName } = authData;
      resolve({ id: payload, nickName: nickName });
    }, 1000);
  });
};

// items 비동기 통신
export const itemFetch = () => {};
