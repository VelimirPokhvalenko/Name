import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';
import {addPostActionCreator, updateNewPostMessageActionCreator} from "../../../redux/profile-reducer";


const MyPosts = (props) => {
    debugger
    let newPostElement = React.createRef()

    let updateNewPostMessage = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostMessageActionCreator(text)
        props.dispatch(action);
    }
    let addPost = () => {
        let action = addPostActionCreator()
        props.dispatch(action)
    }

    let postMessages = props.profilePage.postInfo.map(post =>
        <Post postMessage={post.postMessage} id={post.id} likesCount={post.likesCount}/>)

    return (
        <div>
            My posts
            <div>
                <textarea onChange={updateNewPostMessage} value={props.profilePage.newPostText} ref={newPostElement}></textarea>
                <button onClick={addPost} className={s.button}>Add post</button>
            </div>
            <div className={s.posts}>
                {postMessages}
            </div>
        </div>
    )

}

export default MyPosts;