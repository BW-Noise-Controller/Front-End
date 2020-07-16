import * as actionTypes from "../actions";

const initialState = {
    username: "ADP",
    id: 1,
    email: "adrian.com",
    firstName: "Adrian",
    lastName: "Parra",
    title: "Mr.",
    theme: "farm",
    gettingUser: false,
    error: null
}


export const accountReducer = (state = initialState, action) => {
    switch (action.type) {
        case "Error":
            
            break;
    
        default:
            return state;
    }
}