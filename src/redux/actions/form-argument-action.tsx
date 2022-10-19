import { SUBMIT_LOGIN_START } from './action-types';

export const submitLoginStart = (email: String, password: String) => {
    return {
        type : SUBMIT_LOGIN_START,
        email,
        password,
    };
}

export default { submitLoginStart }