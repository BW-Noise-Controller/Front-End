import axios from "axios";


export const ADD_CLASS_FETCH = "ADD_CLASS_FETCH";
export const ADD_CLASS_SUCCESS = "ADD_CLASS_SUCCESS";
export const ADD_CLASS_ERROR = "ADD_CLASS_ERROR";
export const ADD_SCORE_FETCH = "ADD_SCORE_FETCH";
export const ADD_SCORE_SUCCESS = "ADD_SCORE_SUCCESS";
export const ADD_SCORE_ERROR = "ADD_SCORE_ERROR";
export const UPDATE_CLASS_FETCH = "UPDATE_CLASS_FETCH";


export const addclass = classData => dispatch => {

    dispatch({type: ADD_CLASS_FETCH})



    
}

export const editClass = classData => dispatch => {

    dispatch({type: ADD_CLASS_FETCH})
}

export const addScore = scoreDate => dispatch => {

}

export const editScore = scoreDate => dispatch => {

}

export const selectCurrentClass = classData => dispatch => {

    dispatch({type: ADD_CLASS_SUCCESS, payload: classData})
}