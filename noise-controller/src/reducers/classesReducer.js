import {
    ADD_CLASS_FETCH,
    ADD_CLASS_SUCCESS,
    ADD_CLASS_ERROR,
    SELECT_CLASS_SUCCESS
} from "../actions/classesAction.js"

const initialState = {
    classes: [],
    selectedClass: {
        "id": null,
        "className": null,
        "teacherId": null,
        "theme": null,
        "grade": "",
        "numberOfKids": null,
        "streak": null,
    },
    selectedClassScores: [],
    error: {

    },
    fetching: false,

}


export const classReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CLASS_FETCH:
            
            return {
                ...state,
                fetching: true
            };
    
        case ADD_CLASS_SUCCESS:
            return {
                ...state,
                selectedClass: action.payload
            };

        case ADD_CLASS_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case SELECT_CLASS_SUCCESS: 
            return {
                ...state,
                selectedClass: action.payload
            }
        default:
            return state;
    }
}