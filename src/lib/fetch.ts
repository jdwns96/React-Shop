// api sercer
import { User, Items } from "@api";

// app.post("/login")
export const loginFetch = (payload: { id: string; pw: string }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: payload.id, nickName: User.nickName });
    }, 500);
  });
};

// app.post("/auth")
export const authFetch = (payload: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: payload, nickName: User.nickName });
    }, 500);
  });
};

// app.get("/items")
export const itemFetch = (payload: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const page = payload;
      console.log(page);
      // db 쿼리 역할
      const findItems = Items.slice((page - 1) * 8, page * 8); // 현제 보고있는 데이터
      const currentPage = page;
      const totalPage = Math.ceil(Items.length / 8);
      const response = {
        Items: findItems,
        currentPage,
        totalPage,
      };
      resolve(response);
    }, 100);
  });
};

// app.get("/")
export const detailFetch = (payload: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const id = payload;
      console.log(id);
      const response = Items.find((elem) => elem.id === id);
      console.log(response);
      resolve(response);
    }, 100);
  });
};
