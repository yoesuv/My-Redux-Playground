import { ActionCreator } from 'redux';
import { INCREASE_COUNTER, DECREASE_COUNTER, CounterActionType } from '../types';

export const increaseCounter: ActionCreator<CounterActionType> = () => {
  return {
    type: INCREASE_COUNTER
  };
}

export const decreaseCounter: ActionCreator<CounterActionType> = () => {
  return {
    type: DECREASE_COUNTER
  };
}