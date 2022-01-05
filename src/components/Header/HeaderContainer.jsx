import Header from "./components/Header/Header";
import {connect} from "react-redux";

let mapStateToProps = (state) => ({logo: state.dialogsPage.logo})
export let HeaderContainer = connect(mapStateToProps)(Header)