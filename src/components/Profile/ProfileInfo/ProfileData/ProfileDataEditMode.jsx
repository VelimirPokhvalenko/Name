import s from "../ProfileInfo.module.css";
import React from "react";
import facebook from "../../../../assets/social networks/facebook.png";
import website from "../../../../assets/social networks/website.png";
import vk from "../../../../assets/social networks/vk.png";
import twitter from "../../../../assets/social networks/twitter.png";
import instagram from "../../../../assets/social networks/instagram.png";
import youtube from "../../../../assets/social networks/youtube.png";
import github from "../../../../assets/social networks/github.png";
import mainLink from "../../../../assets/social networks/mainLink.png";
import {reduxForm} from "redux-form";
import {createField, Input, Textarea} from "../../../FormsControls/FormsControls";
import Collapsible from "react-collapsible";

const ProfileDataEditMode = ({handleSubmit, profile, error}) => {

    return <form onSubmit={handleSubmit}>
        <div className={s.dataAllocation}>
            <div className={s.icons}>
                <nav>
                    <button className={s.exit}>
                        <div className={s.text}> Exit edit mode</div>
                    </button>
                </nav>
                {error && <div className={s.error}>{error}</div>}
                <div className={s.personal}>
                    <div>
                        Full name: {createField("Full name", "fullName", [], Textarea)}
                    </div>
                </div>
                <div>
                    <h3>Please doubleClick on your status to change it</h3>
                </div>
                <span className={s.floatForImages}>
                    {Object.keys(profile.contacts).map(key => {
                        return <Icon iconName={key} iconValue={profile.contacts[key]}/>;
                    })}

                </span>
            </div>
            <div className={s.AdditionalDescription}>
                <div> Looking for a job:
                    {createField("", "lookingForAJob", [], Input,
                        {type: 'checkbox'})}</div>
                <div>
                    JOB status:{" "}
                    {createField("jobStatus", "lookingForAJobDescription", [], Textarea)}
                </div>
                <div>About me: {createField("aboutMe", "aboutMe", [], Textarea)}</div>
            </div>
        </div>
    </form>
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

    return <div>
        <Collapsible transitionTime={200} className={s.collapsible}
                     trigger={<img height={50} width={50} src={iconObject[iconName]}/>}>
            <div>
                {createField(iconName, `contacts.${iconName}`, [], Textarea, {height: 70,
                    width: 40})}
            </div>
        </Collapsible>
    </div>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataEditMode);

export default ProfileDataFormReduxForm;