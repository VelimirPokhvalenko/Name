import s from "../ProfileInfo.module.css";
import ProfileStatusWithSuperHooks from "../../ProfileStatus/ProfileStatusWithSuperHooks";
import React from "react";
import facebook from "../../../../assets/social networks/facebook.png";
import website from "../../../../assets/social networks/website.png";
import vk from "../../../../assets/social networks/vk.png";
import twitter from "../../../../assets/social networks/twitter.png";
import instagram from "../../../../assets/social networks/instagram.png";
import youtube from "../../../../assets/social networks/youtube.png";
import github from "../../../../assets/social networks/github.png";
import mainLink from "../../../../assets/social networks/mainLink.png";

export const ProfileData = (props) => {

    return <div className={s.dataAllocation}>
        <div className={s.icons}>
            <div className={s.personal}>
                <div>
                    Full Name: {" " + props.profile.fullName}
                </div>
                <div>
                    UserId: {" " + props.profile.userId}
                </div>
            </div>
            <div>
                <h3><ProfileStatusWithSuperHooks status={props.status} updateStatus={props.updateStatus}/></h3>
            </div>
            <span className={s.floatForImages}>
                    {Object.keys(props.profile.contacts).map(key => {
                        return <Icon iconName={key} iconValue={props.profile.contacts[key]}/>;
                    })}

                </span>
        </div>
        <div className={s.AdditionalDescription}>
            <div>Looking for a job: {props.profile.lookingForAJob ? "yes" : "false"}</div>
            {props.profile.lookingForAJob && <div>
                JOB status:{" "}
                {props.profile.lookingForAJobDescription}.
            </div>}
            <div>About me: {props.profile.aboutMe}</div>
        </div>
    </div>
}

const iconObject = {
    "facebook": facebook,
    "website": website,
    "vk": vk,
    "twitter": twitter,
    "instagram": instagram,
    "youtube": youtube,
    "github": github,
    "mainLink": mainLink
}

const Icon = ({iconName, iconValue}) => {
    return <a key={iconName} href={iconValue}>
        <img height={50} width={50} src={iconObject[iconName]}/>
    </a>
}