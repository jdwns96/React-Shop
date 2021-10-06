import { takeEvery, select } from "redux-saga/effects";

// function
const selectCart = (state: CartState, payload: { id: number; title: string; price: string; img: string; describe: string }) => {
  const index = [...state].findIndex((elem) => elem.id === payload.id);
  if (index > -1) {
    const newList = [...state];
    const calcCart = {
      ...[...state][index],
      quantity: [...state][index].quantity + 1,
    };
    newList[index] = calcCart;
    return newList;
  } else {
    return [...state, { ...payload }];
  }
};

const deleteCart = (state: CartState, id: number) => {
  const result = [...state].filter((elem) => elem.id !== id);
  return result;
};

const plusCart = (state: CartState, id: number) => {
  const index = [...state].findIndex((elem) => elem.id === id);
  const newList = [...state];
  const calcCart = {
    ...[...state][index],
    quantity: [...state][index].quantity + 1,
  };
  newList[index] = calcCart;
  return newList;
};

const minusCart = (state: CartState, id: number) => {
  const index = [...state].findIndex((elem) => elem.id === id);
  const newList = [...state];
  if (newList[index].quantity === 1) return newList;
  const calcCart = {
    ...[...state][index],
    quantity: [...state][index].quantity - 1,
  };
  newList[index] = calcCart;
  return newList;
};

type CartAction = ReturnType<typeof selCartAction> | ReturnType<typeof delCartAction> | ReturnType<typeof plusCartAction> | ReturnType<typeof minusCartAction>;
type CartState = {
  id: number;
  title: string;
  price: string;
  img: string;
  describe: string;
  quantity: number;
}[];

const SELECT_CART = "cart/SELECT_CART" as const;
const DELETE_CART = "cart/DELETE_CART" as const;
const PLUS_CART = "cart/PLUS_CART" as const;
const MINUS_CART = "cart/MINUS_CART" as const;

export const selCartAction = (payload: { id: number; title: string; price: string; img: string; describe: string; quantity: number }) => ({ type: SELECT_CART, payload });
export const delCartAction = (payload: number) => ({ type: DELETE_CART, payload });
export const plusCartAction = (payload: number) => ({ type: PLUS_CART, payload });
export const minusCartAction = (payload: number) => ({ type: MINUS_CART, payload });

//middleware
function* cartMiddleware() {
  //@ts-ignore
  const state = yield select(); // saga 에서 state 를 가져오는 방법
  yield localStorage.setItem("Cart", JSON.stringify([...state.cart]));
}

export function* cartSaga() {
  yield takeEvery([SELECT_CART, DELETE_CART, PLUS_CART, MINUS_CART], cartMiddleware);
}

const initialState: CartState = JSON.parse(localStorage.getItem("Cart") ?? "[]");

const reducer = (state: CartState = initialState, action: CartAction) => {
  switch (action.type) {
    case SELECT_CART:
      return selectCart(state, action.payload);
    case DELETE_CART:
      return deleteCart(state, action.payload);
    case PLUS_CART:
      return plusCart(state, action.payload);
    case MINUS_CART:
      return minusCart(state, action.payload);
    default:
      return state;
  }
};

export default reducer;
