import React from 'react';
import NavBar from "./Navbar";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        users: state.userInfo.dialogsItem
    }
}

let NavbarContainer = connect(mapStateToProps)(NavBar)

export default NavbarContainer;