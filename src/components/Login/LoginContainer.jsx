import React from 'react';
import {connect} from "react-redux";
import {loginUserThunkCreator} from "../../redux/authReducer";
import {Login} from "./Login";

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuthorized,
    captchaURL: state.auth.captchaURL
});

export default connect(mapStateToProps, {loginUserThunkCreator})(Login)