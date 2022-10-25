import { ActionCreator } from 'redux';
import { ListPlaceActionType, LIST_PLACE_LOADING_START, LIST_PLACE_LOADING_STOP } from '../types'

export const listPlaceLoadingStart: ActionCreator<ListPlaceActionType> = () => {
  return {
    type: LIST_PLACE_LOADING_START,
    places: [],
  };
}

export const listPlaceLoadingStop: ActionCreator<ListPlaceActionType> = () => {
  return {
    type: LIST_PLACE_LOADING_STOP,
    places: [],
  };
}
