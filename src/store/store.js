import {applyMiddleware, compose, createStore} from "redux";
import {logger} from "redux-logger/src";
import {rootReducer} from "./root-reducer";

//middleware
const middlewares = [logger];
//this is composition of middlewares (composition pattern)
const composedEnhancers = compose(applyMiddleware(...middlewares));
// root-reducer
export const store = createStore(rootReducer, undefined, composedEnhancers);
