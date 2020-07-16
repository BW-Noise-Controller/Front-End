import * as actionTypes from "../actions";

const initialState = {
    classes: [{
        "id": 1,
        "name": "Second Grade",
        "teacherId": 1,
        "theme": "safari",
        "grade": "2",
        "numberOfKids": 25,
        "streak": 3
      },
      {
        "id": 2,
        "name": "Afternoon Kindergarten",
        "teacherId": 1,
        "theme": "safari",
        "grade": "Kindergarten",
        "numberOfKids": 30,
        "streak": 0
      }],
    selectedClass: {
        "id": 2,
        "name": "Afternoon Kindergarten",
        "teacherId": 1,
        "theme": "safari",
        "grade": "Kindergarten",
        "numberOfKids": 30,
        "streak": 0
    }
}


export const classReducer = (state = initialState, action) => {
    switch (action.type) {
        case "Error":
            
            break;
    
        default:
            return state;
    }
}