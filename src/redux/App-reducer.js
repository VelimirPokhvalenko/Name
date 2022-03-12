import {authorize} from "./authReducer";

const AUTHORIZATION_SUCCES = 'AUTHORIZATION-SUCCES';

let initialState = {
    initializated: false,
}

export const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTHORIZATION_SUCCES:
            return {
                ...state,
                initializated: true,
            }
        default:
            return state;
    }
}

export const initializationSuccess = () => ({type: AUTHORIZATION_SUCCES});

// of course I can refactor this, but it is helpful for remembering how it all work

export const initializeApp = () => {
    return (dispatch) => {
        let promise = dispatch(authorize())

        promise.then( () => {
            dispatch(initializationSuccess())
        });
    }
}