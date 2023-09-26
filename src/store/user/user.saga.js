import { all, call, put, takeLatest } from "redux-saga/effects";
import { USER_ACTION_TYPES } from "./user.types";
import {signInFailure, signInSuccess} from "./user.action";
import {
  createUserDocumentFromAuth,
  getCurrentUser,
} from "../../utils/firebase/firebase.utils";

export function* getSnapshotFromUserAuth(userAuth, additionalDetails) {
  try {
    // the call effect generator takes as its first argument a function,
    // and the subsequent arguments will be the parameters that we pass into that function
    const userSnapshot = yield call(
      createUserDocumentFromAuth,
      userAuth,
      additionalDetails
    );
    console.log(userSnapshot);
    console.log(userSnapshot.data());
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (e) {
    yield put(signInFailure(e));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (e) {
    yield put(signInFailure(e));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* userSagas() {
  yield all([call(onCheckUserSession)]);
}
