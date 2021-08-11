import d from "./Message.module.css";

export const Message = (props) => {
    return (
        <div>
            <div className={d.message}>{props.message} </div>
        </div>
    )
}