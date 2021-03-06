import { call, put, takeEvery } from "@redux-saga/core/effects";
import { itemFetch } from "@lib/fetch";

type MainAction = ReturnType<typeof mainRequestAction> | ReturnType<typeof mainSuccessAction> | ReturnType<typeof mainFailAction>;
type MainState = {
  isLoading: boolean;

  currentPage: number; // 현재 페이지
  totalPage: number; // 전체 페이지
  items: Item[]; // item list
};
type Item = {
  id: number;
  title: string;
  price: number;
  img: string;
  describe: string;
};

const MAIN_REQUEST = "main/MAIN_REQUEST" as const;
const MAIN_SUCCESS = "main/MAIN_SUCCESS" as const;
const MAIN_FAIL = "main/MAIN_FAIL" as const;

export const mainRequestAction = (payload: number) => ({ type: MAIN_REQUEST, payload });
export const mainSuccessAction = (payload: { Items: Item[]; currentPage: number; totalPage: number }) => ({ type: MAIN_SUCCESS, payload });
export const mainFailAction = () => ({ type: MAIN_FAIL });

function* mainMiddleware(action: MainAction) {
  try {
    // @TODO how can I set Type in generator ???
    // @ts-ignore
    const items = yield call(itemFetch, action.payload);
    yield put(mainSuccessAction(items));
  } catch (e) {
    yield put(mainFailAction());
  }
}

export function* mainSaga() {
  yield takeEvery(MAIN_REQUEST, mainMiddleware);
}

const initialState: MainState = {
  isLoading: false,

  currentPage: 1,
  totalPage: 1,
  items: [],
};

const reducer = (state: MainState = initialState, action: MainAction) => {
  switch (action.type) {
    case MAIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        // items: [], 데이터가 부드럽지않음
      };
    case MAIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        currentPage: action.payload.currentPage,
        totalPage: action.payload.totalPage,
        items: action.payload.Items,
      };
    case MAIN_FAIL:
      return {
        ...state,
        isLoading: false,
        currentPage: 1,
        totalPage: 1,
        items: [],
      };
    default:
      return state;
  }
};

export default reducer;
