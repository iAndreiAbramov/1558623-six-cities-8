import { ActionType, ActionTypes } from '../types/action-types';
import { AuthorizationStatus, Cities, DEFAULT_CITY_NAME } from '../const';
import { StateTypes } from '../types/state-types';

const initialState: StateTypes = {
  activeCity: {
    name: Cities[DEFAULT_CITY_NAME].name,
    location: {
      latitude: Cities[DEFAULT_CITY_NAME].location.latitude,
      longitude: Cities[DEFAULT_CITY_NAME].location.longitude,
      zoom: Cities[DEFAULT_CITY_NAME].location.zoom,
    }
  },
  offersData: [],
  pointsForMap: [],
  authorization: AuthorizationStatus.Unknown,
};

export const reducer = (state: StateTypes = initialState, action: ActionTypes): StateTypes => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return {
        ...state,
        activeCity: {
          name: action.payload.cityName,
          location: {
            latitude: Cities[action.payload.cityName].location.latitude,
            longitude: Cities[action.payload.cityName].location.longitude,
            zoom: Cities[action.payload.cityName].location.zoom,
          }
        },
      };
    case ActionType.LoadOffersData:
      return {
        ...state,
        offersData: action.payload.offersList,
        pointsForMap: action.payload.pointsForMap,
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
