import React from 'react';
import s from './ProfileInfo.module.css';
import witcher from '../../../assets/witcher.jpg';
import {ProfileData} from "./ProfileData/ProfileData";
import {ProfileInfoEditMode} from "./ProfileInfoEditMode";
import {Preloader} from "../../../common/Preloader/Preloader";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    if(props.editMode) {
        return <ProfileInfoEditMode {...props}/>
    }

    const setEditMode = () => {
        props.manageEditMode(true);
    }

    return (
        <div className={s.allocation}>
            <div className={s.profileImage}>
                <img height='100%' width='105%'
                     src={
                         (!props.profile.photos.large ?
                             witcher :
                             props.profile.photos.large)
                     }/>
                {props.isOwner &&
                    <div className={s.superButton}>
                        <button id={'message'} className={s.EditModeButton}
                                onClick={setEditMode}>Edit mode
                        </button>
                    </div>
                }
            </div>
            <ProfileData  className={s.data} {...props}/>
        </div>
    )
}

export default ProfileInfo;