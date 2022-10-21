import { SUBMIT_LOGIN_START, SUBMIT_LOGIN_SUCCESS } from './action-types';

export const submitLoginStart = (email: String, password: String) => {
    return {
        type : SUBMIT_LOGIN_START,
        email,
        password,
    };
}

export const submitLoginSuccess = () => {
    return {
        type : SUBMIT_LOGIN_SUCCESS,
    }
}

export function postLogin() {
    setTimeout(() => {
        
    }, 3000);
}

export default { submitLoginStart, submitLoginSuccess }