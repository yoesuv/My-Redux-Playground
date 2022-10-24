// import { SET_LIST_PLACE } from './action-types';
// import { uiStartLoadingListPlace, uiStopLoadingListPlace, uiNetworkErrorListPlace } from './list-place-action';

// export const getListPlace = () => {
//   console.log("getListPlace");
//   return dispatch => {
//     dispatch(uiStartLoadingListPlace);
//     fetch("https://info-malang-batu.firebaseapp.com/List_place_malang_batu.json")
//     .then((response) => response.json())
//     .then((responseJson) => {
//       console.log("sukses request data");
//       dispatch(uiStopLoadingListPlace);
//       dispatch(setListPlace(responseJson));
//     })
//     .catch((err) => {
//       console.log(err);
//       dispatch(uiStopLoadingListPlace);
//       dispatch(uiNetworkErrorListPlace);
//     })
//   }
// }

// export const setListPlace = places => {
//   return {
//     type: SET_LIST_PLACE,
//     places: places,
//   }
// };
