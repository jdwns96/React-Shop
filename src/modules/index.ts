// Redux
import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

// Redux-saga
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";

// modules && Saga

// type
export type RootState = ReturnType<typeof rootReducer>;

// saga middleware
const sagaMiddleware = createSagaMiddleware();

// root
const rootReducer = combineReducers({});

// saga
function* rootSaga() {
  yield all([]);
}

// store
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

// saga run
sagaMiddleware.run(rootSaga);

export default store;
