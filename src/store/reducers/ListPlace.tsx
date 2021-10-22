import { UI_START_LOADING_LIST_PLACE, UI_STOP_LOADING_LIST_PLACE, UI_NETWORK_ERROR_LIST_PLACE } from '../actions/ActionTypes';

interface ListPlace {
  type: String
}

const initialState = {
  isLoading: false,
  isNetworkError: false,
}

const reducer = (state = initialState, action: ListPlace) => {
  switch (action.type) {
    case UI_START_LOADING_LIST_PLACE :
      return {
        ...state,
        isNetworkError: false,
        isLoading: true,
      };
    case UI_STOP_LOADING_LIST_PLACE :
      return {
        ...state,
        isLoading: false,
      }
    case UI_NETWORK_ERROR_LIST_PLACE:
      return {
        ...state,
        isNetworkError: true,
      }
    default:
      return state;
  }
}

export default reducer;