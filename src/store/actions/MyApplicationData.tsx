import { SET_LIST_PLACE } from './ActionTypes';
import { uiStartLoadingListPlace, uiStopLoadingListPlace, uiNetworkErrorListPlace } from './Index';

export const getListPlace = () => {
  return dispatch => {
    dispatch(uiStartLoadingListPlace);
    fetch("https://info-malang-batu.firebaseapp.com/List_place_malang_batu.json")
    .then((response) => response.json())
    .then((responseJson) => {
      dispatch(uiStopLoadingListPlace);
      dispatch(setListPlace(responseJson));
    })
    .catch((err) => {
      console.log(err);
      dispatch(uiStopLoadingListPlace);
      dispatch(uiNetworkErrorListPlace);
    })
  }
}

export const setListPlace = places => {
  return {
    type: SET_LIST_PLACE,
    places: places,
  }
};
