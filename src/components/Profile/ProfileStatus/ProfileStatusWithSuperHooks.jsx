import React, {useEffect, useState} from 'react';
import s from '../ProfileInfo/ProfileInfo.module.css';

const ProfileStatusWithSuperHooks = (props) => {

    const [editMode, changeEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status);
    }, [props.status] )


    const activateEditMode = () => {
        changeEditMode(true);
    }

    const deactivateEditMode = () => {
        changeEditMode(false);
        props.updateStatus(status);
    }

    const setNewStatus = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            <b>Status: </b>
            {editMode ?
                <textarea autoFocus={true} onChange={e => setNewStatus(e)}
                          onBlur={ (e) => {deactivateEditMode(e)}} value={status}/>
                : <span onDoubleClick={activateEditMode}>{props.status || "There is no status yet"}
                </span>
            }
        </div>
    )
}

export default ProfileStatusWithSuperHooks;