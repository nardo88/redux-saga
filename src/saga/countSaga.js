
// put - это своего рода dispatch, который предназначен для ассинхронных фсешщты
// takeEvery - это effect который 
import {put, takeEvery} from 'redux-saga/effects'
import { ASYNC_DECREMENT, ASYNC_INCREMENT, decrementCreator, incrementCreator } from '../store/countReducer'

// функция которая будет имитировать асинхронный код. Функция будет выполняться с задержкой
const delay = (ms) => new Promise(res => setTimeout(res, ms))

// функция worker для инкремента
function* incrementWorker() {
    // внутри воркера переда каждым ассинхронным действием мы вызываем yield
    yield delay(1000)
    // после чего вызываем put (аналог dispatch, т.е. в него передаем action из reducer)
    yield put(incrementCreator())
    // воркер готов, теперь надо заставить его работать. Для этого реализуем watcher 
}

// функция worker для декремента
function* decrementWorker() {
    yield delay(1000)
    yield put(decrementCreator())
    
}

// watcher для всех воркеров которые связаны со счетчиком
export function* countWatcher() {
    // первым аргументом передает тип action
    // вторым аргументом передаем worker который должен отработать при вызове action
    yield takeEvery(ASYNC_INCREMENT, incrementWorker)
    yield takeEvery(ASYNC_DECREMENT, decrementWorker)
}