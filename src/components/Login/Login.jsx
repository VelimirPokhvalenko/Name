import {Field, reduxForm} from "redux-form";
import {isGmail, minLength, required} from "../utils/validators";
import {Input} from "../FormsControls/FormsControls";
import {Redirect} from "react-router-dom";
import form from '../FormsControls/FormControls.module.css'

let minLength5 = minLength(5);

const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} name={'login'} placeholder={'Login'} validate={[required, isGmail]}/>
            </div>
            <div>
                <Field component={Input} name={'password'} type={'password'} placeholder={'password'}
                       validate={[required, minLength5]}/>
            </div>
            <div>
                <Field component={'input'} name={'rememberMe'} type={"checkbox"}/>
                remember me
            </div>
            {props.error &&
                <div className={form.form_summary_error}>{props.error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm({form: 'Login'})(LoginForm);

export const Login = (props) => {
    const onSubmit = (formData) => {
        props.loginUserThunkCreator(formData.login, formData.password, formData.rememberMe);
    }

    if (props.isAuth) return <Redirect to={'/profile'}/>

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}