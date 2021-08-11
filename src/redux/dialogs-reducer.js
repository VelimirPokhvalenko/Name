import Elon from "../assets/Elon.jpg";
import btn from "../assets/btn.svg";

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    messages: [
        {message: 'Hello Vsevolod', id: 0, friendsName: 'Velimir', userId: 4},
        {message: 'Good morning! What are you gonna do today?', id: 1, friendsName: 'Vsevolod', userId: 3},
        {message: 'I\'ll study React for my future profession.', id: 2, friendsName: 'Velimir', userId: 4},
        {
            message: 'But I gonna prepare for the ZNO and work for some hours.',
            id: 3,
            friendsName: 'Vsevolod',
            userId: 3
        },
        {message: 'Ok I\'ve understood, let\'s go working.', id: 4, friendsName: 'Velimir', userId: 4},
        {message: 'Yes', id: 5, friendsName: 'Vsevolod', userId: 3},
        {message: 'What?', id: 6, friendsName: 'Velimir', userId: 4},
        {message: 'What?', id: 7, friendsName: 'Vsevolod', userId: 3},
        {message: 'Uh Ok.', id: 8, friendsName: 'Velimir', userId: 4},
    ],
    insider: 'Velimir',
    VelimirAva: Elon,
    btnImage: btn,
    newMessageText: 'Witcher, samurai, jedi'
}

export let dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE :
            let newMessage = {
                message: state.newMessageText,
                id: state.messages.length,
                friendsName: state.insider,
                userId: 4
            }

            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.updatedMessageText;
            return state;

        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, updatedMessageText: text});
