import { ActionType, ActionTypes } from '../types/action-types';
import { AuthorizationStatus, DEFAULT_CITY_NAME } from '../const';
import { State } from '../types/state';

const initialState: State = {
  cityName: DEFAULT_CITY_NAME,
  offersData: [],
  authorization: AuthorizationStatus.Unknown,
};

export const reducer = (state: State = initialState, action: ActionTypes): State => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return {
        ...state,
        cityName: action.payload.cityName,
      };
    case ActionType.LoadOffersData:
      return {
        ...state,
        offersData: action.payload.offersList,
      };
    case ActionType.RequireAuthorization:
      return {
        ...state,
        authorization: action.payload.authStatus,
      };
    case ActionType.RequireLogout:
      return {
        ...state,
        authorization: AuthorizationStatus.NoAuth,
      };
    default:
      return state;
  }
};
