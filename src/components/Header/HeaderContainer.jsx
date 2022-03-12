import React from 'react';
import {connect} from "react-redux";
import {authorize, logoutUserThunkCreator} from "../../redux/authReducer";
import Header from "./Header";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.authorize();
    }

    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    login: state.auth.login,
    email: state.auth.email,
    logo: state.dialogsPage.logo,
    isAuthorized: state.auth.isAuthorized,
})

export default connect(mapStateToProps, {authorize, logoutUser: logoutUserThunkCreator})(HeaderContainer)