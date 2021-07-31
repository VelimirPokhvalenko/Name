import d from "./Dialogs.module.css";
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";

export const Dialogs = (props) => {
    return (
        <div className={d.dialogs}>
            <div className={d.dialogItems}>
                <DialogsItem name={'Oleksandr'}/>
                <DialogsItem name={'Oksana'}/>
                <DialogsItem name={'Svyatoslav'}/>
                <DialogsItem name={'Vsevolod'}/>
                <DialogsItem name={'Velimir'}/>
                <DialogsItem name={'Zlata'}/>
            </div>
            <div className={d.messages}>
                <Message message={'Hello Mr Crabs'} />
                <Message message={'Good morning! Have you seen my dollars?'} />
                <Message message={'Yes, you\'re hanging them right now!'} />
            </div>
        </div>
    )
}