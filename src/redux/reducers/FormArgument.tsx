import { SUBMIT_LOGIN_START } from '../actions/action-types';

interface FormArgument {
    type: String,
}

const initialState = {
    isLoading: false,
    email: "",
    password: "",
}

const reducer = (state = initialState, action: FormArgument) => {
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

export default reducer;