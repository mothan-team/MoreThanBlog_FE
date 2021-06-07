import { applyMiddleware, createStore } from "redux";
import rootReducer from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import loggerMiddleware from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas";

export const sagaMiddleware = createSagaMiddleware();

function configureStore() {
  const middlewares = [loggerMiddleware, sagaMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, composedEnhancers);
  sagaMiddleware.run(rootSaga);

  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("../reducers", () => store.replaceReducer(rootReducer));
  }

  return store;
}

const store = configureStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
