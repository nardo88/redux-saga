// call - effect который возвращает данные которые прилетают нам в промисе
import {put, takeEvery, call} from 'redux-saga/effects'
import { setUsers, FETCH_USERS } from '../store/userReducer'

const fetchUser = () => fetch('https://jsonplaceholder.typicode.com/users')

// создаем worker для получения пользователей
function* fetchUserWorker(){
    const data = yield call(fetchUser)
    // переводим данные в JSON
    const json = yield call(() => new Promise(res => res(data.json())))
    // теперь в функцию putt передаем actionCreator
    yield put(setUsers(json))
}

export function* userWatcher(){
    yield takeEvery(FETCH_USERS, fetchUserWorker)
}