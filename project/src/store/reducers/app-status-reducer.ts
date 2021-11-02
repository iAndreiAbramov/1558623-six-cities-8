import { ActionType, ActionTypes } from '../../types/action-types';
import { FetchStatus } from '../../const';

export type AppStatusTypes = {
  fetchStatus: FetchStatus,
}

const initialState: AppStatusTypes = {
  fetchStatus: FetchStatus.InProgress,
}

export const appStatusReducer = (state= initialState, action: ActionTypes): AppStatusTypes => {
  switch (action.type) {
    case ActionType.SetFetchStatus:
      return {
        ...state,
        fetchStatus: action.payload.fetchStatus,
      };

    default:
      return state;
  }
}
