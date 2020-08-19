import axios from "axios";


export const ADD_ACCOUNT_FETCH = "ADD_ACCOUNT_FETCH";
export const ADD_ACCOUNT_SUCCESS = "ADD_ACCOUNT_SUCCESS";
export const ADD_ACCOUNT_ERROR = "ADD_ACCOUNT_ERROR";
export const EDIT_ACCOUNT_FETCH = "EDIT_ACCOUNT_FETCH";



export const editAccount = account => dispatch => {

    console.log(account);

}

export const deleteAccount = id => dispatch => {
    console.log(id)
}

