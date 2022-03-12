import React from 'react';
import {connect} from "react-redux";
import {loginUserThunkCreator} from "../../redux/authReducer";
import {Login} from "./Login";

class LoginContainer extends React.Component {
    componentDidMount() {
    }
    render() {
        return <Login {...this.props} login={loginUserThunkCreator}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuthorized,
});

export default connect(mapStateToProps, {loginUserThunkCreator})(LoginContainer)