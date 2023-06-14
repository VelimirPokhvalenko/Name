import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return (
        <div className={s.content}>
            <div className={s.info}>
                <ProfileInfo profile={props.profilePage.profile} isAuth={props.isAuthorized}
                             status={props.status} updateStatus={props.updateStatus}
                             isOwner={!props.match.params.userId} editMode={props.editMode}
                             manageEditMode={props.manageEditMode} editProfileData={props.editProfileData}
                             ProfileImageLoader={props.ProfileImageLoader}/>
            </div>
            <div className={s.posts}>
                <MyPostsContainer/>
            </div>
        </div>
    )
}

export default Profile;