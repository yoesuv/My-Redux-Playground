import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import counterReducer from '../store/reducers/Counter';

const rootReducer = combineReducers({
  counterConfigure: counterReducer
});

let composeEnhanchers = compose;
const configureStore = () => {
  return createStore(rootReducer, composeEnhanchers(applyMiddleware(thunk)));
}

export default configureStore;
