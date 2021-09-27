import { put, delay, takeEvery } from "redux-saga/effects";

// type -- state
type AuthState = {
  isLoading: boolean;
  store: {
    id: string;
    server: boolean;
  };
};

// type -- action
type AuthAction = ReturnType<typeof authRequestAction> | ReturnType<typeof authSuccessAction> | ReturnType<typeof authFailAction>;

// action
const AUTH_REQUEST = "auth/AUTH_REQUEST" as const;
const AUTH_SUCCESS = "auth/AUTH_SUCCESS" as const;
const AUTH_FAIL = "auth/AUTH_FAIL" as const;

// action function
export const authRequestAction = (payload: { id: string; pw: string }) => ({ type: AUTH_REQUEST, payload: payload });
export const authSuccessAction = (payload: { id: string; server: string }) => ({ type: AUTH_SUCCESS, payload: payload });
export const authFailAction = () => ({ type: AUTH_FAIL });

// middleware
function* authMiddleware(action: any) {
  try {
    console.log("saga", action.payload);
    yield delay(1000);
    // yield put(authSuccessAction());
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
    server: false,
  },
};

// reducer
const reducer = (state: AuthState = initialState, action: AuthAction) => {
  switch (action.type) {
    case AUTH_REQUEST:
      console.log("AUTH_REQUEST");
      return {
        ...state,
        isLoading: true,
        store: {
          ...state.store,
          id: "",
          pw: "",
          server: false,
        },
      };
    case AUTH_SUCCESS:
      console.log("AUTH_SUCCESS");
      return {
        ...state,
        isLoading: false,
      };
    case AUTH_FAIL:
      console.log("AUTH_FAIL");
      return {
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
