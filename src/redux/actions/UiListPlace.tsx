import { UI_START_LOADING_LIST_PLACE, UI_STOP_LOADING_LIST_PLACE, UI_NETWORK_ERROR_LIST_PLACE } from './action-types'

export const uiStartLoadingListPlace = () => {
  return {
    type: UI_START_LOADING_LIST_PLACE
  };
}

export const uiStopLoadingListPlace = () => {
  return {
    type: UI_STOP_LOADING_LIST_PLACE
  };
}

export const uiNetworkErrorListPlace = () => {
  return {
    type: UI_NETWORK_ERROR_LIST_PLACE
  };
}
