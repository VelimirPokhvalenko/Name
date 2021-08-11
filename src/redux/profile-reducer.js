const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_MESSAGE = 'UPDATE-NEW-POST-MESSAGE';

let initialState = {
    postInfo: [
        {postMessage: 'Hello how is your React?', id: 1, likesCount: 50},
        {postMessage: 'Everything is all right!', id: 1, likesCount: 500},
        {postMessage: 'Have you studied all the hooks?', id: 1, likesCount: 5000},
        {postMessage: 'Not yet, but i\'ll get it!', id: 1, likesCount: 8888888},
        {postMessage: 'Good luck, SUL.', id: 1, likesCount: 777},
    ],
    newPostText: 'Witcher, samurai, jedi'
}

export let profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case  ADD_POST:
            let newPost = {
                postMessage: state.newPostText,
                id: state.postInfo.length,
                likesCount: 0
            }
            state.postInfo.push(newPost)
            state.newPostText = ''
            return state;
        case UPDATE_NEW_POST_MESSAGE :
            state.newPostText = action.newMessageText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostMessageActionCreator = (text) => ({type: UPDATE_NEW_POST_MESSAGE, newMessageText: text});
