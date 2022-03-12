import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../HOC/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        userInfo: state.userInfo,
        isAuthorized: state.auth.isAuthorized,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        // updateNewMessageText: (newMessageText) => {
        //     let action = updateNewMessageTextActionCreator(newMessageText);
        //     dispatch(action)
        // },
        addMessage: (newPostMessage) => {
            dispatch(addMessageActionCreator(newPostMessage))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);