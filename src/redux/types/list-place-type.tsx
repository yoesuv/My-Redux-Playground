import { PlaceModel } from "../../models/place-model";

export const LIST_PLACE_LOADING_START = "LIST_PLACE_LOADING_START";
export const LIST_PLACE_LOADING_STOP = "LIST_PLACE_LOADING_STOP";

interface ListPlaceLoadingStart {
    type: typeof LIST_PLACE_LOADING_START;
    places: PlaceModel[],
}

interface ListPlaceLoadingStop {
    type: typeof LIST_PLACE_LOADING_STOP;
    places: PlaceModel[],
}

export type ListPlaceActionType = ListPlaceLoadingStart | ListPlaceLoadingStop;