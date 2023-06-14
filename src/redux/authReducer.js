import {authAPI, securityAPI} from "../API/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_DATA = 'SET-AUTH-DATA';
const LOGOUT_USER = 'LOGOUT-USER';
const SET_CAPTCHA_URL = 'SET-CAPTCHA-URL';

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuthorized: false,
    captchaURL: null
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
        case SET_CAPTCHA_URL:
            return {
                ...state,
                captchaURL: action.captchaURL
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
const setCaptchaURL = (captchaURL) => ({type: SET_CAPTCHA_URL, captchaURL})

export const authorize = () => async (dispatch) => {
    let response = await authAPI.me()
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data;
        dispatch(setAuthData({id, login, email, isAuthorized: true}));
    }
}


const getCaptchaURL = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaURL();
        dispatch(setCaptchaURL(response.data.url));
}

export const loginUserThunkCreator = (email, password, rememberMe, captchaSymbols) => async (dispatch) => {
    debugger
    const response = await authAPI.login(email, password, rememberMe, captchaSymbols);
    if (response.data.resultCode === 0) {
        dispatch(authorize());
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaURL());
        }
        dispatch(stopSubmit("Login", {_error: response.data.messages}))
    }
}
export const logoutUserThunkCreator = () => async (dispatch) => {
    const response = await authAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(logoutUser());
        dispatch(setAuthData({id: null, login: null, email: null, isAuthorized: false}));
    }
}