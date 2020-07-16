// // React 2 stuff so dont worry about this if React 1 

import axios from 'axios';


export const ERROR = 'ERROR';
export const GET_ANIMALS = 'GET_ANIMALS';
export const GETTING_ANIMALS = 'GETTING_ANIMALS';
export const CREATING_ANIMAL = 'CREATE_ANIMAL';
export const CREATE_ANIMAL = 'CREATE_ANIMAL';
export const UPDATE_ANIMAL = 'UPDATE_ANIMAL';
export const DELETE_ANIMAL = 'DELETE_ANIMAL';
export const UPDATING_ANIMAL = 'UPDATING_ANIMAL';
export const DELETING_ANIMAL = 'DELETING_ANIMAL';
export const SINGLE_ANIMAL = "SINGLE_ANIMAL";
export const TOGGLE_UPDATE_ANIMAL = 'TOGGLE_UPDATE_ANIMAL';

const URL = 'http://localhost:3000/api/animals';

export const getAnimals = () => {
    const animals = axios.get(`${URL}/get`);
    return dispatch => {
        dispatch({ type: GETTING_ANIMALS });
        animals
            .then(response => {
                dispatch({ type: GET_ANIMALS, payload: response.data });
            })
            .catch(err => {
                dispatch({ type: ERROR, payload: err });
            });
    };
};

export const createAnimal = animal => {
    const newAnimal = axios.post(`${URL}/create`, animal);
    return dispatch => {
        dispatch({ type: CREATING_ANIMAL });
        newAnimal
        .then(({ data }) => {
            dispatch({ type: CREATE_ANIMAL, payload: data });
        })
        .catch(err => {
            dispatch({ type: ERROR, payload: err });
        });
    };
};

// export const deleteAnimal = id => {
//     const deletedAnimal = axios.delete(`${URL}/delete`, {
//         data: { id }
//     });
//     return dispatch => {
//         dispatch({ type: DELETING_ANIMAL });
//          deletedFriend
//         .then(({ data }) => {
//             dispatch({ type: DELETE_ANIMAL, payload: data });
//             dispatch({ type: SINGLE_ANIMAL, payload: {} });
//         })
//         .catch(err => {
//             dispatch({ type: ERROR, payload: err });
//         });
//     };
// };

export const toggleShowUpdate = () => {
    return {
        type: TOGGLE_UPDATE_ANIMAL
    };
};

export const updateSingleAnimal = animal => {
    return {
        type: SINGLE_ANIMAL,
        payload: animal
    };
};