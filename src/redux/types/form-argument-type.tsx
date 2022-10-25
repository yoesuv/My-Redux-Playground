export const SUBMIT_LOGIN_RESET = "SUBMIT_LOGIN_RESET";
export const SUBMIT_LOGIN_START = "SUBMIT_LOGIN_START";
export const SUBMIT_LOGIN_SUCCESS = "SUBMIT_LOGIN_SUCCESS";

interface SubmitLoginReset {
    type: typeof SUBMIT_LOGIN_RESET;
}

interface SubmitLoginStart {
    type: typeof SUBMIT_LOGIN_START;
}

interface SubmitLoginSuccess {
    type: typeof SUBMIT_LOGIN_SUCCESS;
}

export type LoginActionType = SubmitLoginReset | SubmitLoginStart | SubmitLoginSuccess