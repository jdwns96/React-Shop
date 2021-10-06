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

type CartAction = ReturnType<typeof selCartAction> | ReturnType<typeof delCartAction>;
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

export const selCartAction = (payload: { id: number; title: string; price: string; img: string; describe: string; quantity: number }) => ({ type: SELECT_CART, payload });
export const delCartAction = (payload: number) => ({ type: DELETE_CART, payload });

//middleware
function* cartMiddleware() {
  //@ts-ignore
  const state = yield select(); // saga 에서 state 를 가져오는 방법
  yield localStorage.setItem("Cart", JSON.stringify([...state.cart]));
}

export function* cartSaga() {
  yield takeEvery([SELECT_CART, DELETE_CART], cartMiddleware);
}

const initialState: CartState = JSON.parse(localStorage.getItem("Cart") ?? "[]");

const reducer = (state: CartState = initialState, action: CartAction) => {
  switch (action.type) {
    case SELECT_CART:
      return selectCart(state, action.payload);
    case DELETE_CART:
      return deleteCart(state, action.payload);
    default:
      return state;
  }
};

export default reducer;
