import d from "./DialogsItem.module.css";
import {NavLink} from "react-router-dom";

export const DialogsItem = (props) => {
    return (
            <div className={d.item}>
                <NavLink to={`/dialogs/${props.id}`} activeClassName={d.active}>
                    <img src={props.image} />
                    {props.name}
                </NavLink>
            </div>
    )
}