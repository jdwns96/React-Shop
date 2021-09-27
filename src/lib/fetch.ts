// 가상 서버
import { authData } from "@DB";

// @실제로 axios 를 사용하진 않고 흉내만 낼것이다.

// login 비동기 통신
export const loginFetch = (payload: any) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const { nickName } = authData;
      resolve({ id: payload.id, nickName: nickName });
    }, 1000);
  });
};

// items 비동기 통신
export const itemFetch = () => {};
