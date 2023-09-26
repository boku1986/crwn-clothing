import {all, call} from "redux-saga/effects";
import {categoriesSaga} from "./category/category.saga";
import {userSagas} from "./user/user.saga";

// we need to export out generator function that will yield all of our sagas
export function* rootSaga() {
  yield all([call(categoriesSaga), call(userSagas)]);
}
