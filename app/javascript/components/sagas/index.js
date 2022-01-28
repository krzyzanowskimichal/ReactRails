import { all, call, delay, fork, put, take, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from 'axios';
import { 
    loadDataSuccess, 
    loadDataError, 
    addItemSuccess, 
    addItemError, 
    LOAD_DATA_START, 
    ADD_ITEM_START 
} from '../actions'

export function* onFetchDataStartAsync () {
    try {
        const response = yield call(
            async () => await axios.get('http://localhost:5000/motorcycle')
        )
        if (response.status === 200) {
            yield delay(500)
            yield put(loadDataSuccess(response.data))
            }
        }
    catch(error) {
        yield put(loadDataError(error.response.data))
    }
}

export function* onAddItemStartAsync ({payload}) {
    try {
        const response = yield call(
            async (item) => await axios.post('http://localhost:5000/motorcycle', item), payload
        )
        if (response.status === 200) {
            yield put(addItemSuccess(response.data))
            }
        }
    catch(error) {
        yield put(addItemError(error.response.data))
    }
}

export function* onFetchData () {
    yield takeEvery(LOAD_DATA_START, onFetchDataStartAsync)
}

export function* onAddItem () {
    yield takeLatest(ADD_ITEM_START, onAddItemStartAsync)
}

const dataSagas = [fork(onFetchData), fork(onAddItem)]

export function* rootSaga() {
    yield all([...dataSagas])
}