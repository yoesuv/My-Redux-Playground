import { SUBMIT_LOGIN_START, SUBMIT_LOGIN_SUCCESS } from '../actions/action-types';

interface FormArgument {
    type: String,
    email: String,
    password: String,
}

const initialState = {
    isLoading: false,
    email: "",
    password: "",
}

export function formReducer(state = initialState, action: FormArgument) {
    switch (action.type) {
        case SUBMIT_LOGIN_START:
            console.log(`Form Argument Reducer # submit login start ${action.email}/${action.password}`);
            return {
                ...state,
                email: action.email,
                pasword: action.password,
                isLoading: true,
            }
        case SUBMIT_LOGIN_SUCCESS: {
            console.log(`Form Argument Reducer # submit login success`);
            return {
                ...state,
                isLoading: false,
            }
        }
        default:
            return state;
    }
}