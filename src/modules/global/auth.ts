// API
import { loginFetch, authFetch } from "@lib/fetch";

// Redux saga
import { put, /*delay,*/ call, takeEvery } from "redux-saga/effects";

// type -- state
type AuthState = {
  isVerification: boolean; // 새로고침 & 최초 랜더링시 로그인 정보를 확인하는 store (검증할때 사용하는 store)
  data: {
    id: string;
    nickName: string;
    isLogin: boolean; // 유저가 로그인 중인지 확인하는 store
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
export const authSuccessAction = (payload: { id: string; nickName: string }) => ({ type: AUTH_SUCCESS, payload: payload });
export const authFailAction = () => ({ type: AUTH_FAIL });

export const logoutAction = () => ({ type: LOGOUT });

// middleware
function* loginMiddleware(action: any) {
  console.log("login saga middleware");
  try {
    // 로그인 성공시 localstorage 에 계정 정보를 저장한다.
    // 이러한 방식은 JWT 에서 사용된다.
    // @ts-ignore
    const response = yield call(loginFetch, action.payload);
    localStorage.setItem("Authorization", response.id);
    yield put(loginSuccessAction(response));
  } catch (e) {
    yield put(loginFailAction());
  }
}

function* authMiddleware() {
  try {
    const Authorization = localStorage.getItem("Authorization");
    if (Authorization === "" || Authorization === undefined || Authorization === null) {
      // 만약 저장소에 정보가 없다면 이대로 끝낸다.
      // localstorage 에 정보가 없다는건 로그인 상태가 아니라는것.
      yield put(authFailAction());
    } else {
      // 만약 localstorage 에 정보가 있다면 현제 로그인 상태이므로 서버에 요청해서 store 정보를 받아온다.
      // 이것의 검증 과정은 실제로 복잡할것이다. 서버에서 토큰 일치를 검사해줘서 만료처리, 로그아웃처리 등 선택할 수 있다.
      // @ts-ignore
      const response = yield call(authFetch, Authorization);
      yield put(authSuccessAction(response));
    }
  } catch (e) {
    yield put(authFailAction());
  }
}

// saga
export function* loginSaga() {
  yield takeEvery(LOGIN_REQUEST, loginMiddleware);
  yield takeEvery(AUTH_REQUEST, authMiddleware);
}

// state
const initialState: AuthState = {
  isVerification: false,
  data: {
    id: "",
    nickName: "",
    isLogin: false,
  },
};

// reducer
const reducer = (state: AuthState = initialState, action: AuthAction) => {
  switch (action.type) {
    case AUTH_REQUEST:
    case LOGIN_REQUEST:
      return {
        ...state,
        isVerification: false,
        data: {
          ...state.data,
          id: "",
          nickName: "",
          isLogin: false,
        },
      };
    case AUTH_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        isVerification: true,
        data: {
          ...state.data,
          id: action.payload.id,
          nickName: action.payload.nickName,
          isLogin: true,
        },
      };
    case AUTH_FAIL:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem("Authorization");
      return {
        isVerification: true,
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
