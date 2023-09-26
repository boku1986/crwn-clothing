import {all, call} from "redux-saga/effects";
import {categriesSaga} from "./category/category.saga";

// we need to export out generator function that will yield all of our sagas
export function* rootSaga() {
  yield all([call(categriesSaga)]);
}
