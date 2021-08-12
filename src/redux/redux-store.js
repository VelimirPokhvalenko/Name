const {createStore, combineReducers} = require("redux");
const {usersInfoReducer} = require("./usersInfoReducer");
const {dialogsReducer} = require("./dialogs-reducer");
const {profileReducer} = require("./profile-reducer");

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    userInfo: usersInfoReducer
})

export let store = createStore(reducers);

