import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatusThunkCreator, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../HOC/withAuthRedirect";
import {compose} from "redux";
import {Preloader} from "../../common/Preloader/Preloader";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) userId = this.props.authorizedUserId;
        this.props.getProfile(userId);
        this.props.getStatusThunkCreator(userId);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status});
        }
    }

    render() {
        if (!this.props.match.params.userId && !this.props.isAuthorized) {
            return <Preloader />
        }
        return (
            <Profile {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
        authorizedUserId: state.auth.id,
        status: state.profilePage.status,
        isAuthorized: state.auth.isAuthorized
    };
}
export default compose(
    connect(mapStateToProps, {getProfile, getStatusThunkCreator, updateStatus}),
    withRouter
)(ProfileContainer)