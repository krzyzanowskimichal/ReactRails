export const LOAD_DATA_START = "LOAD_DATA_START"
export const LOAD_DATA_SUCCESS = "LOAD_DATA_SUCCESS"
export const LOAD_DATA_ERROR = "LOAD_DATA_ERROR"

export const ADD_ITEM_START = "ADD_ITEM_START"
export const ADD_ITEM_SUCCESS = "ADD_ITEM_SUCCESS"
export const ADD_ITEM_ERROR = "ADD_ITEM_ERROR"

export const loadDataStart = () => ({
    type: LOAD_DATA_START, 
})

export const loadDataSuccess = (motorcycle) => ({
    type: LOAD_DATA_SUCCESS, 
    payload: motorcycle
})

export const loadDataError = (error) => ({
    type: LOAD_DATA_ERROR, 
    payload: error
})

export const addItemStart = (item) => ({
    type: ADD_ITEM_START, 
    payload: item
})

export const addItemSuccess = () => ({
    type: ADD_ITEM_SUCCESS, 
    // payload: motorcycle
})

export const addItemError = (error) => ({
    type: ADD_ITEM_ERROR, 
    payload: error
})