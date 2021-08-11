import d from "./Dialogs.module.css";
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";
import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";

export const Dialogs = (props) => {

    let updateNewMessageText= (e) => {
        let newMessageText = e.target.value;
        let action = updateNewMessageTextActionCreator(newMessageText);
        props.dispatch(action)
    }

    let addMessage = () => {
        let action = addMessageActionCreator()
        props.dispatch(action)
    }

    let insider = props.dialogsPage.insider;
    let userPhoto = null;
    let friendsName = null;
    let friendsId = null;

    let dialogsElements = props.usersInfo.map(dialogs => <DialogsItem name={dialogs.name} id={dialogs.id}/>);

    let messageElements = props.dialogsPage.messages.map(message => {
        if (message.friendsName === insider) {
            userPhoto = props.dialogsPage.VelimirAva
            return (<span className={`${d.message} ${d.myself}`}>
                    <Message message={message.message} avatar={userPhoto} id={message.id}/>
                </span>
            )
        } else {
            friendsName = message.friendsName;
            friendsId = message.userId;
            userPhoto = props.usersInfo[friendsId].userImage;
            return (<span className={d.message}>
                <Message message={message.message} avatar={userPhoto} id={message.id}/>
            </span>)
        }
    });

    userPhoto = props.usersInfo[friendsId].userImage;

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
                    <textarea onChange={updateNewMessageText} value={props.dialogsPage.newMessageText} className={d.textArea}></textarea>
                    <input  className={d.btn} onClick={addMessage} type={'image'} src={props.dialogsPage.btnImage}></input>
                </div>
            </div>
        </div>
    )
}