import React from 'react';
import {addPostActionCreator, updateNewPostMessageActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "../MyPosts";


const MyPostsContainer = (props) => {

    let state = props.store.getState()

    let updateNewPostMessage = (body) => {
        let action = updateNewPostMessageActionCreator(body)
        props.store.dispatch(action);
    }
    let addPost = () => {
        let action = addPostActionCreator()
        props.store.dispatch(action)
    }

    return <MyPosts
        profilePage={state.profilePage}
        updateNewPostMessage={updateNewPostMessage}
        addPost={addPost}
    />
}

export default MyPostsContainer;