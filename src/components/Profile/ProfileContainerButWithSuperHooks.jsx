import React, {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    editProfileData,
    getProfile,
    getStatusThunkCreator,
    manageEditMode,
    ProfileImageLoader,
    updateStatus
} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import LoginContainer from "../Login/LoginContainer";

const ProfileContainer = (props) => {

    useEffect(() => {
        let userId = props.match.params.userId;
        if (!userId) userId = props.authorizedUserId;
        if(userId) {
            props.getProfile(userId);
            props.getStatusThunkCreator(userId);
        }
    }, [props.match.params.userId, props.authorizedUserId]);

    if (!props.match.params.userId && !props.isAuthorized) {
        return <LoginContainer />
    }
    return (
        <Profile {...props}/>
    )
}

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
        authorizedUserId: state.auth.id,
        status: state.profilePage.status,
        isAuthorized: state.auth.isAuthorized,
        editMode: state.profilePage.editMode
    };
}

// useSelector should be here, but not connect(

export default compose(
    connect(mapStateToProps, {getProfile, getStatusThunkCreator, updateStatus,
        ProfileImageLoader, manageEditMode, editProfileData}),
    withRouter
)(ProfileContainer)