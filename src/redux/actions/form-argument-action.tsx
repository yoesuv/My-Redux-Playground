import { ActionCreator} from 'redux';
import { LoginActionType, SUBMIT_LOGIN_START, SUBMIT_LOGIN_SUCCESS, SUBMIT_LOGIN_RESET } from './action-types';

const submitLoginStart: ActionCreator<LoginActionType> = () => {
    return {
        type : SUBMIT_LOGIN_START,
    };
}

const submitLoginSuccess: ActionCreator<LoginActionType> = () => {
    return {
        type : SUBMIT_LOGIN_SUCCESS,
    }
}

export const submitLoginReset: ActionCreator<LoginActionType> = () => {
    return {
        type : SUBMIT_LOGIN_RESET,
    }
}

export function loginApi(email: String, password: String) {
    return (dispatch: (arg0: LoginActionType) => void) => {
        dispatch(submitLoginStart());
        setTimeout(() => {
            dispatch(submitLoginSuccess());
        }, 3000);
    }
}