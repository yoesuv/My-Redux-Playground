import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import dataReducer from '../store/reducers/MyApplicationData';
import counterReducer from '../store/reducers/Counter';
import listPlaceReducer from '../store/reducers/ListPlace';
import formArgumentReducer from '../store/reducers/FormArgument';

const rootReducer = combineReducers({
  dataConfigure: dataReducer,
  counterConfigure: counterReducer,
  listPlaceConfigure: listPlaceReducer,
  formArgumentConfigure: formArgumentReducer,
});

let composeEnhanchers = compose;
const configureStore = () => {
  return createStore(rootReducer, composeEnhanchers(applyMiddleware(thunk)));
}

export default configureStore;
