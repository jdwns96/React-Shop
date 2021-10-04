type CartAction = ReturnType<typeof initCartAction> | ReturnType<typeof selCartAction> | ReturnType<typeof delCartAction>;
type CartState = {
  isInitStorage: boolean;
  carts: CartItemState;
};
type CartItemState = object;

const INIT_CART = "cart/INIT_CART" as const;
const SELECT_CART = "cart/SELECT_CART" as const;
const DELTE_CART = "cart/DELTE_CART" as const;

export const initCartAction = () => ({ type: INIT_CART });
export const selCartAction = (payload: { id: number; title: string; price: string; img: string; describe: string }) => ({ type: SELECT_CART, payload });
export const delCartAction = (payload: number) => ({ type: DELTE_CART, payload });

const initialState: CartState = {
  isInitStorage: false,
  carts: {},
};

const reducer = (state: CartState = initialState, action: CartAction) => {
  // 카트 값 가져오기
  const carts = JSON.parse(localStorage.getItem("Cart") ?? "{}");
  switch (action.type) {
    case INIT_CART:
      // 최초에 한번 스토리지에 있는 값을 가져온다.
      return {
        ...state,
        isInitStorage: true,
        carts: carts,
      };

    case SELECT_CART:
      // 카드를 장바구니에 담을시 localstorage와 store값을 변경한다.
      localStorage.setItem(
        "Cart",
        JSON.stringify({
          ...state.carts,
          [action.payload.id]: {
            ...action.payload,
          },
        }),
      );
      return {
        ...state,
        carts: {
          ...state.carts,
          [action.payload.id]: {
            ...action.payload,
          },
        },
      };
    case DELTE_CART:
      // 장바구니에서 지울시 localstorage와 store값을 변경한다.
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
