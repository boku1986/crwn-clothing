import { applyMiddleware, compose, createStore } from "redux";
import { logger } from "redux-logger/src";
import { rootReducer } from "./root-reducer";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

//middleware
const middlewares = [logger];
//this is composition of middlewares (composition pattern)
const composedEnhancers = compose(applyMiddleware(...middlewares));
// root-reducer
export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);
