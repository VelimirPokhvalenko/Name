import React from 'react';
import s from './Friends.module.css';
import {NavLink} from "react-router-dom";
import {FriendsItem} from "./FriendsListItem/FriendItem";

export const Friends = (props) => {

    let usersList = props.users.map(user => <FriendsItem userId={user.id} name={user.name} userImage={user.userImage}/>)

    return (
        <div className={s.friendsItem}>
            <div id={s.friendsButton}>
                <button className={s.friendsButton} onClick={() => {
                    const friendsList = document.getElementById(s.friendsList);
                    friendsList.classList.toggle(s.open)
                }}>Friends
                </button>
            </div>
            <ul id={s.friendsList}>
                {usersList}
            </ul>
        </div>)
}