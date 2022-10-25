export const INCREASE_COUNTER = 'INCREASE_COUNTER';
export const DECREASE_COUNTER = 'DECREASE_COUNTER';

interface IncreaseCounter {
    type: typeof INCREASE_COUNTER;
}

interface DecreaseCounter {
    type: typeof DECREASE_COUNTER;
}

export type CounterActionType = IncreaseCounter | DecreaseCounter;