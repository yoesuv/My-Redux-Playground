import { combineReducers } from 'redux';
import { counterReducer } from './counter-reducer';
import { formReducer } from './form-argument-reducer';

export const rootReducer = combineReducers({
    counter: counterReducer,
    form: formReducer,
});

export type RootState = ReturnType<typeof rootReducer>;