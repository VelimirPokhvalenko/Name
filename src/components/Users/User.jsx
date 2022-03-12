import style from "./users.module.css";
import {NavLink} from "react-router-dom";
import userImage from "../../assets/defaultUserImage.jpg";
import React from "react";

export const User = (usersList, followingIsInProgress, unfollowUser, followUser) => {
    return <span className={style.users}>
                    {
                        usersList.map(u => (
                            <span className={u.followed === true ? style.userBlock2
                                : style.userBlock}>
                <NavLink to={`/Profile/${u.id}`}>
                    <img src={u.photos.small !== null ? u.photos.small : userImage} className={style.ava}/>
                </NavLink>
                <span>{u.name}</span>
                <div>{u.hobbies}</div>
                                {u.followed ? <button
                                        disabled={followingIsInProgress.some(id => id === u.id)}
                                        className={style.btn} onClick={() => {
                                        unfollowUser(u.id)
                                    }}>
                                        <div className={style.btnText}>unfollow</div>
                                    </button>
                                    : <button disabled={followingIsInProgress.some(id => id === u.id)}
                                              className={style.btn} onClick={() => {
                                        followUser(u.id)
                                    }}>
                                        <div className={style.btnText}>follow</div>
                                    </button>}
            </span>
                        ))}
        </span>
}