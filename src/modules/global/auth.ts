// Redux saga
import { put, /*delay,*/ call, takeEvery } from "redux-saga/effects";

// API
import { loginFetch } from "@lib/fetch";

// type -- state
type AuthState = {
  isLoading: boolean;
  data: {
    id: string;
    nickName: string;
    isLogin: boolean;
  };
};

// type -- action
type AuthAction =
  | ReturnType<typeof loginRequestAction>
  | ReturnType<typeof loginSuccessAction>
  | ReturnType<typeof loginFailAction>
  | ReturnType<typeof authRequestAction>
  | ReturnType<typeof authSuccessAction>
  | ReturnType<typeof authFailAction>
  | ReturnType<typeof logoutAction>;

// action
const LOGIN_REQUEST = "auth/LOGIN_REQUEST" as const;
const LOGIN_SUCCESS = "auth/LOGIN_SUCCESS" as const;
const LOGIN_FAIL = "auth/LOGIN_FAIL" as const;

const AUTH_REQUEST = "auth/AUTH_REQUEST" as const;
const AUTH_SUCCESS = "auth/AUTH_SUCCESS" as const;
const AUTH_FAIL = "auth/AUTH_FAIL" as const;

const LOGOUT = "auth/LOGOUT" as const;

// action function
// payload는 넣는 값을 결정하는것이지 store 에 무엇을 담을지는 reducer에서 결정한다.
export const loginRequestAction = (payload: { id: string; pw: string }) => ({ type: LOGIN_REQUEST, payload: payload });
export const loginSuccessAction = (payload: { id: string; nickName: string }) => ({ type: LOGIN_SUCCESS, payload: payload });
export const loginFailAction = () => ({ type: LOGIN_FAIL });

export const authRequestAction = () => ({ type: AUTH_REQUEST });
export const authSuccessAction = () => ({ type: AUTH_SUCCESS });
export const authFailAction = () => ({ type: AUTH_FAIL });

export const logoutAction = () => ({ type: LOGOUT });

// middleware
function* loginMiddleware(action: any) {
  console.log("login saga middleware");
  try {
    // @ts-ignore
    const response = yield call(loginFetch, action.payload);
    localStorage.setItem("Authorization", response.id);
    yield put(loginSuccessAction(response));
  } catch (e) {
    yield put(loginFailAction());
  }
}

// saga
export function* loginSaga() {
  yield takeEvery(LOGIN_REQUEST, loginMiddleware);
}

// state
const initialState: AuthState = {
  isLoading: false,
  data: {
    id: "",
    nickName: "",
    isLogin: false,
  },
};

// reducer
const reducer = (state: AuthState = initialState, action: AuthAction) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        data: {
          ...state.data,
          id: "",
          nickName: "",
          isLogin: false,
        },
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: {
          ...state.data,
          id: action.payload.id,
          nickName: action.payload.nickName,
          isLogin: true,
        },
      };
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem("Authorization");
      return {
        isLoading: false,
        data: {
          ...state.data,
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
