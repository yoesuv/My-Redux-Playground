import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';

const middleware = applyMiddleware(thunk);
const configureStore = () => {
  return createStore(rootReducer, middleware);
}

export default configureStore;
