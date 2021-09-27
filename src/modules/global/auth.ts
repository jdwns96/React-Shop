// Redux saga
import { put, /*delay,*/ call, takeEvery } from "redux-saga/effects";

// API
import { loginFetch } from "@lib/fetch";

// type -- state
type AuthState = {
  isLoading: boolean;
  store: {
    id: string;
    nickName: string;
    isLogin: boolean;
  };
};

// type -- action
type AuthAction = ReturnType<typeof authRequestAction> | ReturnType<typeof authSuccessAction> | ReturnType<typeof authFailAction>;

// action
const AUTH_REQUEST = "auth/AUTH_REQUEST" as const;
const AUTH_SUCCESS = "auth/AUTH_SUCCESS" as const;
const AUTH_FAIL = "auth/AUTH_FAIL" as const;

// action function
// payload는 넣는 값을 결정하는것이지 store 에 무엇을 담을지는 reducer에서 결정한다.
export const authRequestAction = (payload: { id: string; pw: string }) => ({ type: AUTH_REQUEST, payload: payload });
export const authSuccessAction = (payload: { id: string; nickName: string }) => ({ type: AUTH_SUCCESS, payload: payload });
export const authFailAction = () => ({ type: AUTH_FAIL });

// middleware
function* authMiddleware(action: any) {
  console.log("auth saga middleware");
  try {
    // @ts-ignore
    const response = yield call(loginFetch, action.payload);
    localStorage.setItem("Authorization", response.id);
    yield put(authSuccessAction(response));
  } catch (e) {
    yield put(authFailAction());
  }
}

// saga
export function* authSaga() {
  yield takeEvery(AUTH_REQUEST, authMiddleware);
}

// state
const initialState: AuthState = {
  isLoading: false,
  store: {
    id: "",
    nickName: "",
    isLogin: false,
  },
};

// reducer
const reducer = (state: AuthState = initialState, action: AuthAction) => {
  switch (action.type) {
    case AUTH_REQUEST:
      return {
        ...state,
        isLoading: true,
        store: {
          ...state.store,
          id: "",
          nickName: "",
          isLogin: false,
        },
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        store: {
          ...state.store,
          id: action.payload.id,
          nickName: action.payload.nickName,
          isLogin: true,
        },
      };
    case AUTH_FAIL:
      localStorage.removeItem("Authorization");
      return {
        isLoading: false,
        store: {
          ...state.store,
          id: "",
          nickName: "",
          isLogin: false,
        },
      };
    default:
      return state;
  }
};

export default reducer;
