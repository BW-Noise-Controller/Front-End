import axios from "axios";


export const ADD_CLASS_FETCH = "ADD_CLASS_FETCH";
export const ADD_CLASS_SUCCESS = "ADD_CLASS_SUCCESS";
export const ADD_CLASS_ERROR = "ADD_CLASS_ERROR";
export const UPDATE_CLASS_FETCH = "UPDATE_CLASS_FETCH";
export const ADD_SCORE_FETCH = "ADD_SCORE_FETCH";
export const ADD_SCORE_SUCCESS = "ADD_SCORE_SUCCESS";
export const ADD_SCORE_ERROR = "ADD_SCORE_ERROR";
export const UPDATE_SCORE_FETCH = "UPDATE_SCORE_FETCH";

export const SELECT_CLASS_SUCCESS = "SELECT_CLASS_SUCCESS";


export const addClass = classData => dispatch => {

    // dispatch({type: ADD_CLASS_FETCH})
    console.log("addClass", classData)
}

export const editClass = classData => dispatch => {

    // dispatch({type: ADD_CLASS_FETCH})
    console.log("editClass", classData)
}

export const deleteClass = id => dispatch => {
    console.log("deleteClass", id)
}

export const getScores = clsId => dispatch => {
    console.log("getScores", clsId)
}

export const addScore = scoreDate => dispatch => {
    console.log("addscore", scoreDate)
}

export const editScore = scoreDate => dispatch => {
    console.log("editScore", scoreDate)
}

export const selectCurrentClass = classData => dispatch => {

    dispatch({type: SELECT_CLASS_SUCCESS, payload: classData})
}