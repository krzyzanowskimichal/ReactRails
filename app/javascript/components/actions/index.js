export const LOAD_DATA_START = "LOAD_DATA_START"
export const LOAD_DATA_SUCCESS = "LOAD_DATA_SUCCESS"
export const LOAD_DATA_ERROR = "LOAD_DATA_ERROR"

export const ADD_ITEM_START = "ADD_ITEM_START"
export const ADD_ITEM_SUCCESS = "ADD_ITEM_SUCCESS"
export const ADD_ITEM_ERROR = "ADD_ITEM_ERROR"

export const DELETE_ITEM_START = "DELETE_ITEM_START"
export const DELETE_ITEM_SUCCESS = "DELETE_ITEM_SUCCESS"
export const DELETE_ITEM_ERROR = "DELETE_ITEM_ERROR"

export const UPDATE_ITEM_START = "UPDATE_ITEM_START"
export const UPDATE_ITEM_SUCCESS = "UPDATE_ITEM_SUCCESS"
export const UPDATE_ITEM_ERROR = "UPDATE_ITEM_ERROR"

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
})

export const addItemError = (error) => ({
    type: ADD_ITEM_ERROR, 
    payload: error
})

export const deleteItemStart = (item_id) => ({
    type: DELETE_ITEM_START, 
    payload: item_id
})

export const deleteItemSuccess = (item_id) => ({
    type: DELETE_ITEM_SUCCESS, 
    payload: item_id
})

export const deleteItemError = (error) => ({
    type: DELETE_ITEM_ERROR, 
    payload: error
})

export const updateItemStart = (itemData) => ({
    type: UPDATE_ITEM_START, 
    payload: itemData
})

export const updateItemSuccess = () => ({
    type: UPDATE_ITEM_SUCCESS, 
})

export const updateItemError = (error) => ({
    type: UPDATE_ITEM_ERROR, 
    payload: error
})