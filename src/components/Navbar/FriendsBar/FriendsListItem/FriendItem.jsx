import React from 'react';
import s from './FriendItem.module.css';
import {NavLink} from "react-router-dom";

export const FriendsItem = (props) => {
    return (
        <li>
            <NavLink to={`/dialogs/${props.userId}`}>
                <div>
                    <img className={s.userImage} src={props.userImage}/>
                </div>
                {props.name}
            </NavLink>
        </li>
    )
}