// import { applyMiddleware, compose, createStore } from "redux";

import {logger} from "redux-logger/src";
import {configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "./root-reducer";
// import { rootReducer } from "./root-reducer";
// import storage from "redux-persist/lib/storage";
// import { persistReducer, persistStore } from "redux-persist";
// import createSagaMiddleware from "redux-saga";
// import { rootSaga } from "./root-saga";
//
// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["cart"],
// };
//
// const persistedReducer = persistReducer(persistConfig, rootReducer);
// const sagaMiddleware = createSagaMiddleware();
//
// //middleware
const middlewares = [process.env.NODE_ENV === "development" && logger].filter(
  Boolean // this way we filter out anything that is not true
);
//
// const composeEnhancer =
//   (process.env.NODE_ENV !== "production" &&
//     window &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;
//
// //this is composition of middlewares (composition pattern)
// const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares));
// // root-reducer
// export const store = createStore(
//   persistedReducer,
//   undefined,
//   composedEnhancers
// );

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }).concat(middlewares), // we can override the default middleware (3 of them) by passing our own
});
//
// sagaMiddleware.run(rootSaga);
//
// export const persistor = persistStore(store);
