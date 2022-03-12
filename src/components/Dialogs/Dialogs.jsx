import d from "./Dialogs.module.css";
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";
import React from "react";
import ReduxDialogSendMessageForm from './DialogsForm/DialogSendMessageForm';

export const Dialogs = (props) => {

    let insider = props.dialogsPage.insider;
    let userPhoto = null;
    let friendsName = null;
    let friendsId = null;

    let dialogsElements = props.userInfo.dialogsItem.map(dialogs =>
        <DialogsItem key={'forty_one'} name={dialogs.name} id={dialogs.id}/>);

    let messageElements = props.dialogsPage.messages.map(message => {
        if (message.friendsName === insider) {
            userPhoto = props.dialogsPage.VelimirAva
            return (<span key={'forty_two'} className={`${d.message} ${d.myself}`}>
                    <Message message={message.message} avatar={userPhoto} id={message.id}/>
                </span>
            )
        } else {
            friendsName = message.friendsName;
            friendsId = message.userId;
            userPhoto = props.userInfo.dialogsItem[friendsId].userImage;
            return (<span className={d.message}>
                <Message message={message.message} avatar={userPhoto} id={message.id}/>
            </span>)
        }
    });

    userPhoto = props.userInfo.dialogsItem[friendsId].userImage;

    let onSubmit = (FormData) => {
        debugger
        props.addMessage(FormData.newMessageBody);
    }

    return (
        <div>
            <div className={d.dialogs}>
                <div className={d.dialogItems}>
                    {dialogsElements}
                </div>
                <div>
                    <div className={d.headline}>
                        <div>
                            <div className={d.headlineLeft}>
                                <img className={d.avatar} src={userPhoto}/>
                                {friendsName}
                            </div>
                            <div className={d.headlineRight}>
                                {props.dialogsPage.insider}
                                <img className={d.avatar} src={props.dialogsPage.VelimirAva}/>
                            </div>
                        </div>
                    </div>
                    <div className={d.messages}>
                        {messageElements}
                    </div>
                    <ReduxDialogSendMessageForm image={props.dialogsPage.btnImage} onSubmit={onSubmit}/>
                    </div>
            </div>
        </div>
    )
}