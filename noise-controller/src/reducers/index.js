// React 2 stuff so don't worry about this if React 1 

//Need to figure out how many folders will branch out for here

//to create the payloads
import { combineReducers } from 'redux';
import { animalsReducer } from './animalsReducer';
import { singleAnimalReducer } from './singleAnimalReducer';
import { accountReducer } from "./accountReducer";
import {classReducer} from "./classesReducer";


const rootReducer = combineReducers({
    animalsReducer,
    singleAnimalReducer,
    accountReducer,
    classReducer

});


export default rootReducer;