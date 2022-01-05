const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_MESSAGE = 'UPDATE-NEW-POST-MESSAGE';
const SET_USER_DATA = 'SET-USER-DATA';

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
}

export let profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case  ADD_POST:
            let newPost = {
                postMessage: state.newPostText,
                id: state.postInfo.length,
                likesCount: 0
            }
            return {
                ...state,
                postInfo: [...state.postInfo, newPost],
                newPostText: ''
            };
        case UPDATE_NEW_POST_MESSAGE :
            return {
                ...state,
                newPostText: action.newMessageText
            };
        case SET_USER_DATA:
            return{
                ...state,
                profile: action.profile
            }
        default:
            return state;
    }
}

export const addPost = () => ({type: ADD_POST});
export const updateNewPostMessage = (text) => ({type: UPDATE_NEW_POST_MESSAGE, newMessageText: text});
export const setUserData = (profile) => ({type: SET_USER_DATA, profile});
