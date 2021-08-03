import { create } from "domain"
import { createStore, applyMiddleware} from "redux"
import createSagaMiddleware from 'redux-saga'
import { ChatReducer } from "../reducers/ChatReducer"
import rootSaga from "../sagas"

// const reducer = ChatReducer

const sagaMiddleware = createSagaMiddleware()
const store = createStore(ChatReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

export default store