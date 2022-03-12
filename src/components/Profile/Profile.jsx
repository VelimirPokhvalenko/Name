import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return (
        <div className={s.content}>
            <div className={s.info}>
                <ProfileInfo profile={props.profilePage.profile} isAuth={props.isAuthorized}
                             status={props.status} updateStatus={props.updateStatus}/>
            </div>
            <div className={s.posts}>
                <MyPostsContainer/>
            </div>
        </div>
    )
}

export default Profile;