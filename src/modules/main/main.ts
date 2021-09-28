import { itemFetch } from "@lib/fetch";

import { call, put, takeEvery } from "@redux-saga/core/effects";

type MainAction = ReturnType<typeof mainRequestAction> | ReturnType<typeof mainSuccessAction> | ReturnType<typeof mainFailAction>;
type MainState = {
  isLoading: boolean;
  items: object[];
};

const MAIN_REQUEST = "main/MAIN_REQUEST" as const;
const MAIN_SUCCESS = "main/MAIN_SUCCESS" as const;
const MAIN_FAIL = "main/MAIN_FAIL" as const;

export const mainRequestAction = () => ({ type: MAIN_REQUEST });
export const mainSuccessAction = (payload: any) => ({ type: MAIN_SUCCESS, payload });
export const mainFailAction = () => ({ type: MAIN_FAIL });

function* mainMiddleware() {
  try {
    // @ts-ignore
    const items = yield call(itemFetch);
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
  items: [],
};

const reducer = (state: MainState = initialState, action: MainAction) => {
  switch (action.type) {
    case MAIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        items: [],
      };
    case MAIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        items: action.payload,
      };
    case MAIN_FAIL:
      return {
        ...state,
        isLoading: false,
        items: [],
      };
    default:
      return state;
  }
};

export default reducer;
