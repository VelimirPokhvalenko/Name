import s from "./ProfileInfo.module.css";
import React from "react";
import witcher from "../../../assets/witcher.jpg";
import ProfileDataEditMode from "./ProfileData/ProfileDataEditMode";

export const ProfileInfoEditMode = (props) => {

    const SetUserImage = (e) => {
        if (e.target.files.length) {
            props.ProfileImageLoader(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        props.editProfileData(formData);
    }

    return <div className={s.allocation}>
        <div className={s.profileImage}>
            <img height='87%' width='95%'
                 src={
                     (!props.profile.photos.large ?
                         witcher :
                         props.profile.photos.large)
                 }/>

            <b>Select Profile image:</b>
            <input type={'file'} id={'profileImage'} onChange={SetUserImage}/>
        </div>
        <ProfileDataEditMode onSubmit={onSubmit} profile={props.profile} initialValues={props.profile}/>
    </div>


}