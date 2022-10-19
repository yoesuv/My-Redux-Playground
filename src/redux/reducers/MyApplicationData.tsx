import { SET_LIST_PLACE } from '../actions/ActionTypes';

interface MyApplicationData {
  type: String,
  places: [{nama:'', lokasi:'', gambar:''}],
}

const initialState = {
  places: [{nama:'', lokasi:'', gambar:''}],
}

const reducer = (state = initialState, action: MyApplicationData) => {
  switch (action.type) {
    case SET_LIST_PLACE :
      return {
        ...state,
        places: action.places,
      };
    default:
      return state;
  }
}

export default reducer;
