import {
    ADD_ACCOUNT_FETCH,
    ADD_ACCOUNT_SUCCESS,
    ADD_ACCOUNT_ERROR
} from "../actions/accountAction.js";

const initialState = {
    username: null,
    id: null,
    email: null,
    firstName: null,
    lastName: null,
    title: null,
    theme: null,
    micSensitivity: 5,
    fetching: false,
    error: null
}


export const accountReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ACCOUNT_FETCH:
            return {
                ...state,
                fetching: true,
                error: null
            }
        case ADD_ACCOUNT_SUCCESS:
            return {
                ...state,
                fetching: false
            }
        case ADD_ACCOUNT_ERROR:
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        default:
            return state;
    }
}