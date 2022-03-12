import {authAPI} from "../API/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_DATA = 'SET-AUTH-DATA';
const LOGOUT_USER = 'LOGOUT-USER';

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuthorized: false
}

export let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case  SET_AUTH_DATA:
            return {
                ...state,
                ...action.data,
            };
        case LOGOUT_USER:
            return {
                ...state,
                ...action.data,
            }
        default:
            return state;
    }
}

export const setAuthData = ({id, login, email, isAuthorized}) => ({
    type: SET_AUTH_DATA,
    data: {id, login, email, isAuthorized}
});

export const logoutUser = () => ({type: LOGOUT_USER});

export const authorize = () => async (dispatch) => {
    let response = await authAPI.me()
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data;
        dispatch(setAuthData({id, login, email, isAuthorized: true}));
    }
}

export const loginUserThunkCreator = (email, password, rememberMe) => async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe);
    if (response.data.resultCode === 0) {
        dispatch(authorize());
    } else {
        dispatch(stopSubmit("Login", {_error: response.data.messages}))
    }
}
export const logoutUserThunkCreator = () => async (dispatch) => {
    const response = await authAPI.logout();
    if(response.data.resultCode === 0)
    dispatch(logoutUser);
    dispatch(setAuthData({id: null, login: null, email: null, isAuthorized: false}));
}