import { SUBMIT_LOGIN_RESET, SUBMIT_LOGIN_START, SUBMIT_LOGIN_SUCCESS } from '../types';

interface FormArgument {
    type: String,
}

const initialState = {
    isLoading: false,
    isSuccess: false,
}

export function formReducer(state = initialState, action: FormArgument) {
    switch (action.type) {
        case SUBMIT_LOGIN_RESET :
            console.log(`Form Argument Reducer # submit login reset`);
            return {
                ...state,
                isLoading: false,
                isSuccess: false,
            }
        case SUBMIT_LOGIN_START:
            console.log(`Form Argument Reducer # submit login start`);
            return {
                ...state,
                isLoading: true,
                isSuccess: false,
            }
        case SUBMIT_LOGIN_SUCCESS: {
            console.log(`Form Argument Reducer # submit login success`);
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
            }
        }
        default:
            return state;
    }
}