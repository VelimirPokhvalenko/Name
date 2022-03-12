import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../../utils/validators";
import s from "../MyPosts.module.css";
import React from "react";
import {Textarea} from "../../../FormsControls/FormsControls";

const maxLength15 =  maxLength(50)

const AddNewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} name={'newPostText'} placeholder={'Write your message here'}
                   validate={[required,maxLength15]}/>
        </div>
        <div>
            <button className={s.button}>Add post</button>
        </div>
    </form>
}

export default reduxForm({form: 'AddNewPostForm'})(AddNewPostForm);