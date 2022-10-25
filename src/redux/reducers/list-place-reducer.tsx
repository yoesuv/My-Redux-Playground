import { PlaceModel } from '../../models/place-model';
import { LIST_PLACE_LOADING_START, LIST_PLACE_LOADING_STOP } from '../types';

interface ListPlace {
  type: String,
  places: PlaceModel[],
}

const initialState = {
  isLoading: false,
  places: [],
}

export function listPlaceReducer(state = initialState, action: ListPlace) {
  switch (action.type) {
    case LIST_PLACE_LOADING_START :
      return {
        ...state,
        isLoading: true,
      };
    case LIST_PLACE_LOADING_STOP :
      return {
        ...state,
        isLoading: false,
      }
    default:
      return state;
  }
}
