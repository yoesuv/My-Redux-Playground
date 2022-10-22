export const INCREASE_COUNTER = 'INCREASE_COUNTER';
export const DECREASE_COUNTER = 'DECREASE_COUNTER';

export const UI_START_LOADING_LIST_PLACE = "UI_START_LOADING_LIST_PLACE";
export const UI_STOP_LOADING_LIST_PLACE = "UI_STOP_LOADING_LIST_PLACE";
export const UI_NETWORK_ERROR_LIST_PLACE = "UI_NETWORK_ERROR_LIST_PLACE";

export const SET_LIST_PLACE = "SET_LIST_PLACE";

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