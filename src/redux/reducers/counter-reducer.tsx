import { INCREASE_COUNTER, DECREASE_COUNTER } from '../types';

interface Counter {
  type: String
}

const initialState = {
  counter: 0
}

export function counterReducer(state = initialState, action: Counter){
  switch (action.type) {
    case INCREASE_COUNTER:
      return {
        ...state,
        counter: state.counter + 1
      }
    case DECREASE_COUNTER:
      return {
        ...state,
        counter: state.counter - 1
      }
    default:
      return state;
  }
}
