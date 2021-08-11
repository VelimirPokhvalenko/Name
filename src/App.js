import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings /Settings";
import {News} from "./components/News/News";
import s from "./components/Navbar/FriendsBar/Friends.module.css";

const App = (props) => {
    debugger
    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar users={props.state.usersInfo.dialogsItem}/>
                <div className='app-wrapper-content' onClick={ () => {
                    const friendsList = document.getElementById(s.friendsList);
                    friendsList.classList.remove(s.open)}}>
                    <Route path={'/Profile'} render={ () => <Profile
                        profilePage={props.state.profilePage}
                        dispatch={props.dispatch.bind(props.store)}
                    />}/>
                    <Route path={'/Dialogs'} render={() => <Dialogs
                        dialogsPage={props.state.dialogsPage}
                        usersInfo={props.state.UsersInfo.dialogsItem}
                        dispatch={props.dispatch.bind(props.store)}

                    />} />
                    <Route path={'/News'} component={News}/>
                    <Route path={'/Music'} component={Music}/>
                    <Route path={'/Settings'} component={Settings}/>
                </div>
            </div>);
}

export default App;