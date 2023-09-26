import { applyMiddleware, compose, createStore } from "redux";
import { logger } from "redux-logger/src";
import { rootReducer } from "./root-reducer";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

//middleware
const middlewares = [
  process.env.NODE_ENV !== "production" && logger,
  thunk,
].filter(
  Boolean // this way we filter out anything that is not true
);

const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

//this is composition of middlewares (composition pattern)
const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares));
// root-reducer
export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);
