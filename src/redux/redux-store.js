import {usersReducer} from "./users-reducer";
import {authReducer} from "./authReducer";
import thunkMiddleWare from "redux-thunk";
import {applyMiddleware, compose} from "redux";
import {reducer as formReducer} from 'redux-form';
import {AppReducer} from "./App-reducer";

const {createStore, combineReducers} = require("redux");
const {usersInfoReducer} = require("./usersInfoReducer");
const {dialogsReducer} = require("./dialogs-reducer");
const {profileReducer} = require("./profile-reducer");

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    userInfo: usersInfoReducer,
    App: AppReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleWare)));

// export let store = createStore(reducers, applyMiddleware(thunkMiddleWare));
window.store = store;

