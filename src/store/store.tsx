import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import counterReducer from '../store/reducers/Counter';

const rootReducer = combineReducers({
  counterConfigure: counterReducer,
});

const middleware = applyMiddleware(thunk);
const configureStore = () => {
  return createStore(rootReducer, middleware);
}

export default configureStore;
