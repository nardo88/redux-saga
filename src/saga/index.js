// all - глобальная функция watcher которая следит за другими watchers, что-то типа combineReducer, но для  watcher
import {all} from 'redux-saga/effects'
import { countWatcher } from './countSaga'
import { userWatcher } from './usersSaga'


export function* rootWatcher(){
    // метод all принимает массив watchers
    yield all([userWatcher(), countWatcher()])
}