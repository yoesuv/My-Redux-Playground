import { SUBMIT_LOGIN_START } from '../actions/action-types';

interface FormArgument {
    type: String,
}

const initialState = {
    isLoading: false,
    email: "",
    password: "",
}

export function formReducer(state = initialState, action: FormArgument) {
    switch (action.type) {
        case SUBMIT_LOGIN_START:
            return {
                ...state,
                isLoading: true,
            }
        default:
            return state;
    }
}