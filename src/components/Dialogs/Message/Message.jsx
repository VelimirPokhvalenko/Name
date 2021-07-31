import d from "./Message.module.css";

export const Message = (props) => {
    return (
                <div className={d.message}>{props.message} </div>
    )
}