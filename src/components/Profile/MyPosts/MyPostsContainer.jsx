import React from 'react';
import {addPost} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        postInfo: state.profilePage.postInfo
    }
}

//
// let mapDispatchToProps = (dispatch) => {
//     return {
//         updateNewPostMessage: (body) => {
//                     let action = updateNewPostMessageActionCreator(body)
//                     dispatch(action);
//                 },
//         addPost: () => {
//                     dispatch(addPostActionCreator())
//                 }
//     }
// }

export let MyPostsContainer = connect(mapStateToProps,
    {addPost})(MyPosts)
