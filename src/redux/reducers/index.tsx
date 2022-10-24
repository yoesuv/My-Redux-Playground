import { combineReducers } from 'redux';
import { counterReducer } from './counter-reducer';
import { formReducer } from './form-argument-reducer';
import { listPlaceReducer } from './list-place-reducer';

export const rootReducer = combineReducers({
    counter: counterReducer,
    form: formReducer,
    listPlace: listPlaceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;