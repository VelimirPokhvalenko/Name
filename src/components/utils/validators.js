export const required = value => {
    if (!value) return 'this field is required';
    return undefined;
}
export const maxLength = (maxLength) => {
    return (value) => {
        if (value && value.length > maxLength) return `Max length is ${maxLength} symbols`;
        return undefined;
    }
}

export const isGmail = (value) => {
    if (value.endsWith('@gmail.com')) return undefined;
    return 'Login should end with "@gmail.com"';
}

export const minLength = (minLength) => (value) => {
    if(value.length < minLength) return `password should be longer than ${minLength}`;
    return undefined
}
