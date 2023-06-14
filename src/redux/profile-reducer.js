import {authAPI, profileAPI} from "../API/api";
import {stopSubmit} from "redux-form";
import {authorize} from "./authReducer";

const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_MESSAGE = 'UPDATE-NEW-POST-MESSAGE';
const SET_USER_DATA = 'SET-USER-DATA';
const GET_STATUS_DATA = 'GET-STATUS-DATA';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST';
const SET_USER_PHOTO = 'SET-USER-PHOTO';
const SET_EDIT_MODE = 'SET-EDIT-MODE';

let initialState = {
    postInfo: [
        {postMessage: 'Hello how is your React?', id: 1, likesCount: 50},
        {postMessage: 'Everything is all right!', id: 1, likesCount: 500},
        {postMessage: 'Have you studied all the hooks?', id: 1, likesCount: 5000},
        {postMessage: 'Not yet, but i\'ll get it!', id: 1, likesCount: 8888888},
        {postMessage: 'Good luck, SUL.', id: 1, likesCount: 777},
    ],
    newPostText: 'Witcher, samurai, jedi',
    profile: null,
    status: null,
    editMode: false
}

export let profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case  ADD_POST:
            let newPost = {
                postMessage: action.newPostText,
                id: state.postInfo.length,
                likesCount: 0
            }
            return {
                ...state,
                postInfo: [...state.postInfo, newPost]
            };
        case SET_USER_DATA:
            return {
                ...state,
                profile: action.profile
            }
        case GET_STATUS_DATA:
            return {
                ...state,
                status: action.status
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case DELETE_POST:
            return {
                ...state,
                postInfo: state.postInfo.filter((e) => e.id !== action.id)
            }
        case SET_USER_PHOTO:
            let newProfile = state.profile
            newProfile.photos = action.photos
            return {
                ...state, profile: newProfile
            }
        case SET_EDIT_MODE:
            return {
                ...state,
                editMode: action.editMode
            }
        default:
            return state;
    }
}

export const addPost = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserData = (profile) => ({type: SET_USER_DATA, profile});
export const getStatusData = (status) => ({type: GET_STATUS_DATA, status});
export const setStatusData = (status) => ({type: SET_STATUS, status});
export const deletePost = (id) => ({type: DELETE_POST, id});
export const setUserPhoto = (photos) => ({type: SET_USER_PHOTO, photos});
export const manageEditMode = (editMode) => ({type: SET_EDIT_MODE, editMode});

export const getProfile = (id) => {
    return (dispatch) => {
        profileAPI.setProfile(id).then(response => {
            dispatch(setUserData(response.data));
        })
    }
}
export const getStatusThunkCreator = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(getStatusData(response.data));
}
export const updateStatus = (status) => async (dispatch) => {
    debugger
    try {
        const response = await profileAPI.SetUserStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatusData(status));
        }
    } catch(error) {
        console.log(error.message)
    }
}

export const ProfileImageLoader = (photos) => async (dispatch) => {
    const response = await profileAPI.setProfilePhoto(photos);
    if (response.data.resultCode === 0) {
        dispatch(setUserPhoto(response.data.data.photos));
    }
}

export const editProfileData = (data) => async (dispatch, getState) => {
    debugger
    let response = await profileAPI.editProfileData(data);
    if (response.data.resultCode === 0) {
        response = await profileAPI.setProfile(getState().auth.id);
        dispatch(setUserData(response.data));
        dispatch(manageEditMode(false));
    } else {
            dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}));
    }
}