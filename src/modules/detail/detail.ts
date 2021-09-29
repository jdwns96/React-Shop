import { call, put, takeEvery } from "@redux-saga/core/effects";
import { detailFetch } from "@lib/fetch";

type DetailAction = ReturnType<typeof detailRequestAction> | ReturnType<typeof detailSuccessAction> | ReturnType<typeof detailFailAction>;
type DetailState = {
  isLoading: boolean;
  data: object;
};

const DETAIL_REQUEST = "detail/DETAIL_REQUEST" as const;
const DETAIL_SUCCESS = "detail/DETAIL_SUCCESS" as const;
const DETAIL_FAIL = "detail/DETAIL_FAIL" as const;

export const detailRequestAction = (payload: number) => ({ type: DETAIL_REQUEST, payload });
export const detailSuccessAction = (payload: object) => ({ type: DETAIL_SUCCESS, payload });
export const detailFailAction = () => ({ type: DETAIL_FAIL });

function* detailMiddleware(action: DetailAction) {
  try {
    // @ts-ignore
    const detail = yield call(detailFetch, action.payload);
    yield put(detailSuccessAction(detail));
  } catch (e) {
    yield put(detailFailAction());
  }
}

export function* detailSaga() {
  yield takeEvery(DETAIL_REQUEST, detailMiddleware);
}

const initialState: DetailState = {
  isLoading: false,
  data: {},
};

const reducer = (state: DetailState = initialState, action: DetailAction) => {
  switch (action.type) {
    case DETAIL_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case DETAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case DETAIL_FAIL:
      return { ...state, isLoading: false, data: {} };
    default:
      return state;
  }
};

export default reducer;
