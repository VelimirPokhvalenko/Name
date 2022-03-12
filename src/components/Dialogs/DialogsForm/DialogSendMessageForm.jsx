import {Field, reduxForm} from "redux-form";
import d from "../Dialogs.module.css";
import React from "react";
import {maxLength, required} from "../../utils/validators";
import {Textarea} from "../../FormsControls/FormsControls";

let maxLength50 = maxLength(50);

const DialogSendMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field component={Textarea} className={d.textArea} name={'newMessageBody'}
               placeholder={'Enter your message'} validate={[required, maxLength50]}/>
        <Field component={'input'} className={d.btn} type={'image'} src={props.image} />
    </form>
}

export default reduxForm({form:'DialogSendMessageForm'})(DialogSendMessageForm);