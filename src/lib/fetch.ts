// data
import { User, Items } from "@database";

// login 비동기 통신
export const loginFetch = (payload: any) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const { nickName } = User;
      resolve({ id: payload.id, nickName: nickName });
    }, 1000);
  });
};

// auth 비동기 통신
export const authFetch = (payload: any) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const { nickName } = User;
      resolve({ id: payload, nickName: nickName });
    }, 1000);
  });
};

// items 비동기 통신
export const itemFetch = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // const { nickName } = Items;
      resolve(Items);
    }, 1000);
  });
};
