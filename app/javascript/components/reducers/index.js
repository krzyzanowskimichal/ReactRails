import {
    ADD_ITEM_START,
    ADD_ITEM_SUCCESS,
    ADD_ITEM_ERROR, 
    DELETE_ITEM_START,
    DELETE_ITEM_SUCCESS,
    DELETE_ITEM_ERROR, 
    LOAD_DATA_ERROR, 
    LOAD_DATA_START, 
    LOAD_DATA_SUCCESS, 
    UPDATE_ITEM_START,
    UPDATE_ITEM_ERROR,
    UPDATE_ITEM_SUCCESS} from "../actions";

const initialState = {
    motorcycle: [],
    isFetching: false,
    error: null
}

const rootReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_ITEM_START:
        case UPDATE_ITEM_START:
        case DELETE_ITEM_START:
        case LOAD_DATA_START:
            return {
                ...state,
                isFetching: true
            }   
        
        case ADD_ITEM_SUCCESS:
        case UPDATE_ITEM_SUCCESS:
            return {
                ...state,
                isFetching: false,
            }
        case DELETE_ITEM_SUCCESS:
            return {
                ...state,
                isFetching: false,
                motorcycle: state.motorcycle.filter(item => item.id !== action.payload)
            }
            case LOAD_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                motorcycle: action.payload
            }
        case ADD_ITEM_ERROR:
        case UPDATE_ITEM_ERROR:
        case DELETE_ITEM_ERROR:
        case LOAD_DATA_ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default: 
            return state;
    }
}

export default rootReducer