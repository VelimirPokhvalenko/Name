import React from 'react';
import './App.css';
import {BrowserRouter, HashRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings /Settings";
import {News} from "./components/News/News";
import s from "./components/Navbar/FriendsBar/Friends.module.css";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import UsersContainer from "./components/Users/UsersContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/App-reducer";
import {compose} from "redux";
import {store} from "./redux/redux-store";
import {Preloader} from "./common/Preloader/Preloader";
import * as assert from "assert";
import {Problem404} from "./components/Problem404/Problem404";

const DialogsContainer = React.lazy(() =>
    import("./components/Dialogs/DialogsContainer")
);
const ProfileContainer = React.lazy(() =>
    import("./components/Profile/ProfileContainerButWithSuperHooks")
);

class App extends React.Component {

    catchAllUnhandledErrors = (promiseRejectionEvent) => {
        alert("some error occurred");
        // console.error(promiseRejectionEvent);
    }

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    render() {
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <NavbarContainer/>
                <div className='app-wrapper-content' onClick={() => {
                    let friendsList = document.getElementById(s.friendsList);
                    friendsList.classList.remove(s.open)
                }}>
                    <Switch>
                        <Route exact path={'/'} render={() => <Redirect to={'/profile'}/>}/>
                        <Route path={'/Profile/:userId?'}
                               render={hocForLazyLoadingComponents(ProfileContainer)}/>

                        <Route path={'/Dialogs'} render={hocForLazyLoadingComponents(DialogsContainer)}/>

                        <Route path={'/users'} render={() => <UsersContainer/>}/>

                        <Route path={'/News'} component={News}/>
                        <Route path={'/Music'} component={Music}/>
                        <Route path={'/Settings'} component={Settings}/>
                        <Route path={'/Login'} render={() => <LoginContainer/>}/>
                        <Route path={'*'} render={() => <Problem404/>}/>
                    </Switch>
                </div>
            </div>)
            ;
    }
}

const mapStateToProps = (state) => ({
    initializated: state.App.initializated,
});

const AppContainerComponent = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)

export const AppContainer = () => {

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Provider store={store}>
                <AppContainerComponent/>
            </Provider>
        </BrowserRouter>
    )
}

const hocForLazyLoadingComponents = (Component) => {
    return (props) => {
        return <React.Suspense fallback={<div><Preloader/></div>}>
            <Component {...props} />
        </React.Suspense>
    }
}