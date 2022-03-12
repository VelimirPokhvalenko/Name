import React from 'react';
import s from './Header.module.css';
import {NavLink, Redirect} from "react-router-dom";

const Header = (props) => {

    if (!props.isAuthorized) {
        return <NavLink to={'/Login'} className={s.button}> <div className={s.text}>Log in</div> </NavLink>
    }

    return <div>
        <img src={props.logo} width={100} height={60}/>
            <div className={s.info}>
                {props.login}
                <div>{props.email}</div>
                <div>
                    <button onClick={props.logoutUser}>Logout</button>
                </div>
            </div>
    </div>
}

export default Header;