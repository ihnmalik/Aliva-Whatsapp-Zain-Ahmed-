import { put, takeEvery, all, call } from "redux-saga/effects";
import axios from "axios";
import * as actions from "./actionTypes";
import { chatRoomList } from "./actions";
function* datafetchAsync() {
  const { data } = yield call(
    axios.get,
    "https://mocki.io/v1/24b67ae9-36cf-4de4-b739-dce53baa6394"
  );
  yield put({ type: actions.FETCH_SUCCESS, payload: data });
}

function* watchDataFetchtAsync() {
  yield takeEvery(actions.ASYNC_START, datafetchAsync);
}
export default function* rootSaga() {
  yield all([watchDataFetchtAsync()]);
}
