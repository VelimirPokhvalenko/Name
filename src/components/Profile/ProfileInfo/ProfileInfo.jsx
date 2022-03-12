import React from 'react';
import {Preloader} from "../../../common/Preloader/Preloader";
import instagram from "../../../assets/social networks/icons8-instagram-50.png";
import vk from "../../../assets/social networks/vk.png";
import facebook from "../../../assets/social networks/facebook.png";
import telegram from "../../../assets/social networks/telegram.png";
import s from './ProfileInfo.module.css';
import witcher from '../../../assets/witcher.jpg';
import ProfileStatusWithSuperHooks from "../ProfileStatus/ProfileStatusWithSuperHooks";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={s.allocation}>
            <div className={s.image}>
                <img height='100%' width='105%' src={
                    (!props.profile.photos.large ?
                        witcher :
                        props.profile.photos.large)
                }/>
            </div>
            <div className={s.icons}>
                <div className={s.job}>
                    <div>
                        Something about JOB status:{" "}
                        {props.profile.lookingForAJobDescription}.
                    </div>
                    <div>
                        Full Name: {" " + props.profile.fullName}
                    </div>
                </div>
                <div>
                    <h3><ProfileStatusWithSuperHooks status={props.status} updateStatus={props.updateStatus}/></h3>
                </div>
                <span className={s.floatForImages}>
                    <a href={props.profile.contacts.instagram}>
                        <img height={50} width={50} src={instagram}/>
                    </a>
                    <a href={props.profile.contacts.vk}>
                        <img height={50} width={50} src={vk}/>
                    </a>
                    <a href={props.profile.contacts.github}>
                        <img height={50} width={50} src={telegram}/>
                    </a>
                    <a href={props.profile.contacts.facebook}>
                        <img height={50} width={50} src={facebook}/>
                    </a>
                </span>
            </div>
        </div>
    )
}

export default ProfileInfo;