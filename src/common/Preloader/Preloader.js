import style from "../../components/Users/users.module.css";
import preloader from "../../assets/Spinner-1s-800px.svg";
import React from "react";

export let Preloader = (props) => {
    return <nav className={style.fetcher}>
        <img height={500} width={500} src={preloader}/></nav>
}