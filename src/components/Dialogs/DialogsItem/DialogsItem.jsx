import d from "./DialogsItem.module.css";
import {NavLink} from "react-router-dom";

export const DialogsItem = (props) => {
    return (
            <div className={d.item}>
                <NavLink to={`/dialogs/${props.name}`} activeClassName={d.active}>{props.name}</NavLink>
            </div>
    )
}