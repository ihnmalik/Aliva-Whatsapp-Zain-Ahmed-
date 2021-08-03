import { put, takeEvery, all, call} from "@redux-saga/core/effects";
import axios from "axios";
import store from "./store/store";
import * as actions from './ActionTypes'
// const delay 

function* sayHi(){
    yield console.log("HI USER ---THIS IS FROM SAGA")
    yield put({type: "NEW_CHAT"})
}

function* asyncDatafetch(){
    const { data } = yield call(
        axios.get,
        "https://run.mocky.io/v3/6f45507a-0a30-4624-8af6-d13b56199fc1"
    )
    yield put({type:actions.NEW_CHAT, payload:data})
}

function* datafetch(){
    // yield takeEvery("ASYNC_NEW_CHAT", asyncDatafetch)
    yield takeEvery(actions.ASYNC, asyncDatafetch)

    yield put({ type: 'NEW_CHAT'})
}

export default function* rootSaga(){
    // yield all[sayHi(), datafetchAsync()]
    yield datafetch()
}