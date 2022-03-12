import Elon from '../../src/assets/Elon.jpg';
import Rock from '../../src/assets/Rock.jpg';
import Aleksander from '../../src/assets/Oleksandr.jpg'
import Oksana from '../../src/assets/Oksana.jpg'
import Svyatoslav from '../../src/assets/Svyatoslav.jpeg'
import Zlata from '../../src/assets/Zlata.jpg';
import btn from '../../src/assets/btn.svg';
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _callSubscriber() {
        console.log('The state was changed')
    },
    subscribe(observer) {
        store._callSubscriber = observer;
    },
    _state: {
        UsersInfo: {
            dialogsItem: [
                {name: 'Aleksander', id: 0, userImage: Aleksander},
                {name: 'Oksana', id: 1, userImage: Oksana},
                {name: 'Svyatoslav', id: 2, userImage: Svyatoslav},
                {name: 'Vsevolod', id: 3, userImage: Rock},
                {name: 'Velimir', id: 4, userImage: Elon},
                {name: 'Zlata', id: 5, userImage: Zlata},
            ],
        },
        dialogsPage: {
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
        },
        profilePage: {
            postInfo: [
                {postMessage: 'Hello how is your React?', id: 1, likesCount: 50},
                {postMessage: 'Everything is all right!', id: 1, likesCount: 500},
                {postMessage: 'Have you studied all the hooks?', id: 1, likesCount: 5000},
                {postMessage: 'Not yet, but i\'ll get it!', id: 1, likesCount: 8888888},
                {postMessage: 'Good luck, SUL.', id: 1, likesCount: 777},
            ],
            newPostText: 'Witcher, samurai, jedi'
        },
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(store)
    }
}