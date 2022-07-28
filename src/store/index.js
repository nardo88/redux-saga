import {createStore,  combineReducers, applyMiddleware} from 'redux'
import countReducer from "./countReducer";
import userReducer from "./userReducer";
import createSagaMiddleware from 'redux-saga';
import { rootWatcher } from '../saga';

// создаем midleWare от redux-saga
const sagaMidleWare = createSagaMiddleware()

const rootReduser = combineReducers({
    countReducer,
    userReducer
})

export const store = createStore(rootReduser, applyMiddleware(sagaMidleWare))

// в метод run нам надо передать watcher
sagaMidleWare.run(rootWatcher)
