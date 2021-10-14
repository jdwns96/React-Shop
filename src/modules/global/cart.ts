import { takeEvery, select } from "redux-saga/effects";

import { selectCart, deleteCart, plusCart, minusCart, totalPrice } from "@lib/calc";

type CartAction = ReturnType<typeof selCartAction> | ReturnType<typeof delCartAction> | ReturnType<typeof plusCartAction> | ReturnType<typeof minusCartAction>;
type CartState = {
  totalPrice: number;

  cart: Cart[];
};

type Cart = {
  id: number;
  title: string;
  price: number;
  img: string;
  describe: string;
  quantity: number;
};

const SELECT_CART = "cart/SELECT_CART" as const;
const DELETE_CART = "cart/DELETE_CART" as const;
const PLUS_CART = "cart/PLUS_CART" as const;
const MINUS_CART = "cart/MINUS_CART" as const;

export const selCartAction = (payload: { id: number; title: string; price: number; img: string; describe: string; quantity: number }) => ({ type: SELECT_CART, payload });
export const delCartAction = (payload: number) => ({ type: DELETE_CART, payload });
export const plusCartAction = (payload: number) => ({ type: PLUS_CART, payload });
export const minusCartAction = (payload: number) => ({ type: MINUS_CART, payload });

//middleware
function* cartMiddleware() {
  //@ts-ignore
  const state = yield select((state) => state.cart); // saga 에서 state 를 가져오는 방법
  yield localStorage.setItem(
    "Cart",
    JSON.stringify({
      cart: [...state.cart],
      total: state.totalPrice,
    }),
  ); // 카드 정보
}

export function* cartSaga() {
  yield takeEvery([SELECT_CART, DELETE_CART, PLUS_CART, MINUS_CART], cartMiddleware);
}

// try catch 를 한 이유는 만약 사용자가 임으로 local값을 건들였을때 에러가 발생해서
let initialState = {
  totalPrice: 0,
  cart: [],
};
try {
  initialState = {
    totalPrice: JSON.parse(localStorage.getItem("Cart") ?? '{ "cart": [], "total": "0"}').total,
    cart: JSON.parse(localStorage.getItem("Cart") ?? '{ "cart": [], "total": "0"}').cart,
  };
} catch (e) {
  initialState = {
    totalPrice: 0,
    cart: [],
  };
  localStorage.removeItem("Cart");
}

const reducer = (state: CartState = initialState, action: CartAction) => {
  let cart;
  switch (action.type) {
    case SELECT_CART:
      cart = selectCart(state.cart, action.payload);
      return {
        ...state,
        cart: cart,
        totalPrice: totalPrice(cart),
      };
    case DELETE_CART:
      cart = deleteCart(state.cart, action.payload);
      return {
        ...state,
        cart: cart,
        totalPrice: totalPrice(cart),
      };

    case PLUS_CART:
      cart = plusCart(state.cart, action.payload);
      return {
        ...state,
        cart: cart,
        totalPrice: totalPrice(cart),
      };
    case MINUS_CART:
      cart = minusCart(state.cart, action.payload);
      return {
        ...state,
        cart: cart,
        totalPrice: totalPrice(cart),
      };
    default:
      return state;
  }
};

export default reducer;
