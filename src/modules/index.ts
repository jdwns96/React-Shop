// Redux
import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

// Redux-saga
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";

// modules && Saga
import auth, { loginSaga } from "./global/auth";
import main, { mainSaga } from "./main/main";
import detail, { detailSaga } from "./detail/detail";

// saga middleware
const sagaMiddleware = createSagaMiddleware();

// root
const rootReducer = combineReducers({
  auth,
  main,
  detail,
});

// saga
function* rootSaga() {
  yield all([loginSaga(), mainSaga(), detailSaga()]);
}

//configure with production | development
const configMiddlewrare = (args: typeof sagaMiddleware) => {
  if (process.env.NODE_ENV === "production") {
    return compose(applyMiddleware(args));
  } else {
    return composeWithDevTools(applyMiddleware(args));
  }
};

// store
/* const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware))); */
const store = createStore(rootReducer, configMiddlewrare(sagaMiddleware));

// saga run
sagaMiddleware.run(rootSaga);

// type
export type RootState = ReturnType<typeof rootReducer>;

export default store;
