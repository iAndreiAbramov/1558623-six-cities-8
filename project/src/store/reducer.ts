import { ActionType, ActionTypes } from '../types/action-types';
import { State } from '../types/state';

const initialState: State = {
  city: 'Paris',
};

export const reducer = (state: State = initialState, action: ActionTypes): State => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return { ...state, city: action.payload.name };
    default:
      return state;
  }
};
