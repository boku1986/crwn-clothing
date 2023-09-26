import { all, call, put, takeLatest } from "redux-saga/effects";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import {
  fetchCategoriesFailure,
  fetchCategoriesSuccess,
} from "./category.action";
import { CATEGORY_ACTION_TYPES } from "./category.types";

export function* fetchCategoriesAsync() {
  try {
    // const categoriesList = await getCategoriesAndDocuments();
    // anywhere where we have a function in generator, and we want to turn it into effect, we use `call`
    const categoriesList = yield call(getCategoriesAndDocuments);
    yield put(fetchCategoriesSuccess(categoriesList));
  } catch (e) {
    yield put(fetchCategoriesFailure(e));
  }
}

export function* onFetchCategories() {
  // cancel the previous on, just restart the latest one
  yield takeLatest(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync);
}

export function* categriesSaga() {
  // all - run everything inside and only complete when all of them are successful
  yield all([call(onFetchCategories)]);
}
