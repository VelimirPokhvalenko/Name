import form from './FormControls.module.css'

const FormsControls = ({input, meta, child, ...props}) => {

    const hasError = (meta.error && meta.touched);

    return (
        <div className={form.form_control + " " + (hasError ? form.error : "")}>
            <div>{props.children}</div>
            {hasError &&
                <div><span className={form.form_control + " " + form.error}>
                    {meta.error}
                </span></div>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, ...restProps} = {...props};
    return <FormsControls {...props}><textarea {...restProps} {...input}/></FormsControls>
}
export const Input = (props) => {
    const {input, meta, ...restProps} = {...props};
    return <FormsControls {...props}><input {...restProps} {...input}/></FormsControls>
}