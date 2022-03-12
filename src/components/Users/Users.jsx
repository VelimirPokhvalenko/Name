import userImage from "../../assets/defaultUserImage.jpg";
import style from "./users.module.css";
import React from "react";
import {NavLink} from "react-router-dom";
import {Paginator} from "../utils/Paginator";
import {User} from "./User";


export const Users = ({startPage, usersCount, turnUpPage, turnBackPage, totalUsersCount, onPageChanged,
                      currentPage, followingIsInProgress, usersList, followUser, unfollowUser}) => {

    return (
        <div>
            {Paginator(startPage, turnBackPage, totalUsersCount,
                onPageChanged, currentPage, usersCount, turnUpPage, 10)}
            {User(usersList, followingIsInProgress, unfollowUser, followUser)}
        </div>
    )
}