import s from './MyPosts.module.css';
import O from '../ProfileInfo/ProfileInfo.module.css';
import {Post} from './Post/Post';
import React from 'react';
import AddNewPostReduxForm from './AddNewPostForm/AddNewPostReduxForm';

const MyPosts = React.memo((props) => {

    console.log("Render YO");
    let onAddPost = (formData) => {
        props.addPost(formData.newPostText);
    }
    let i = -1;
    let postMessages = props.postInfo.map(post => {
        i++;
        return (
            <nav key={i}>
                <Post postMessage={post.postMessage} id={post.id} likesCount={post.likesCount}/>
            </nav>)
    })

    return (
        <div className={O.posts}>
            My posts
            <div>
                <AddNewPostReduxForm onSubmit={onAddPost}/>
            </div>
            <div className={s.posts}>
                {postMessages}
            </div>
        </div>
    )
})

export default MyPosts;