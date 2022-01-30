import { all, call, delay, fork, put, take, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from 'axios';
import { serialize } from '../helpers/helpers'
import { 
    loadDataSuccess, 
    loadDataError, 
    addItemSuccess, 
    addItemError, 
    LOAD_DATA_START, 
    ADD_ITEM_START, 
    DELETE_ITEM_START,
    deleteItemSuccess,
    deleteItemError,
    UPDATE_ITEM_START,
    updateItemSuccess
} from '../actions'

function* onFetchDataStartAsync () {
    try {
        const response = yield call(
            async () => await axios.get('http://localhost:3000/data')
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

function* onAddItemStartAsync ({payload}) {
    try {
        const response = yield call(
            async (item) => await axios.post(`http://localhost:3000/add/?}`, item), payload
        )
        if (response.status === 201) {
            yield put(addItemSuccess(response.data))
            }
        }
    catch(error) {
        yield put(addItemError(error.response.data))
    }
}

function* onUpdateItemStartAsync ({payload}) {
    try {
        const response = yield call(
            async (item_id, itemData) => await axios.put(`http://localhost:5000/motorcycle/${item_id}`, itemData), payload.id, payload.formValue
        )
        if (response.status === 200) {
            yield delay(500)
            yield put(updateItemSuccess())
            }
        }
    catch(error) {
        yield put(addItemError(error.response.data))
    }
}

function* onDeleteItemStartAsync (item_id) {
    try {
        const response = yield call(
            async (item_id) => await axios.delete(`http://localhost:3000/delete/?id=${item_id}`), item_id
        )
        if (response.status === 200 || response.status === 204) {
            yield delay(500)
            yield put(deleteItemSuccess(item_id))
            }
        }
    catch(error) {
        yield put(deleteItemError(error.response.data))
    }
}

function* onFetchData () {
    yield takeEvery(LOAD_DATA_START, onFetchDataStartAsync)
}

function* onAddItem () {
    yield takeLatest(ADD_ITEM_START, onAddItemStartAsync)
}

function* onUpdateItem () {
    yield takeLatest(UPDATE_ITEM_START, onUpdateItemStartAsync)
}

function* onDeleteItem () {
    while (true){
    const {payload: item_id} = yield take(DELETE_ITEM_START)
    yield call(onDeleteItemStartAsync, item_id)
    }
}

const dataSagas = [fork(onFetchData), fork(onAddItem), fork(onDeleteItem), fork(onUpdateItem)]

export function* rootSaga() {
    yield all([...dataSagas])
}