import { ActionType, ActionTypes } from '../types/action-types';
import {
  AuthorizationStatus,
  Cities,
  DEFAULT_CITY_NAME,
  DEFAULT_HOTEL_DATA,
  DEFAULT_USER_DATA,
  FetchStatus
} from '../const';
import { StateTypes } from '../types/state-types';

const initialState: StateTypes = {
  fetchStatus: FetchStatus.InProgress,
  activeCity: {
    name: Cities[DEFAULT_CITY_NAME].name,
    location: {
      latitude: Cities[DEFAULT_CITY_NAME].location.latitude,
      longitude: Cities[DEFAULT_CITY_NAME].location.longitude,
      zoom: Cities[DEFAULT_CITY_NAME].location.zoom,
    },
  },
  offersData: [],
  pointsForMap: [],
  authorization: AuthorizationStatus.Unknown,
  //todo: Подумать как уйти от этих констант DEFAULT_...
  currentUser: DEFAULT_USER_DATA,
  currentHotel: DEFAULT_HOTEL_DATA,
  nearOffersData: [],
  currentHotelComments: [],
};

export const reducer = (state: StateTypes = initialState, action: ActionTypes): StateTypes => {
  switch (action.type) {

    case ActionType.InitCity:
      return {
        ...state,
        activeCity: {
          name: action.payload.cityData.name,
          location: {
            latitude: action.payload.cityData.location.latitude,
            longitude: action.payload.cityData.location.longitude,
            zoom: action.payload.cityData.location.zoom,
          },
        },
        offersData: action.payload.offersData,
        pointsForMap: action.payload.pointsForMap,
      };

    case ActionType.SetFetchStatus:
      return {
        ...state,
        fetchStatus: action.payload.fetchStatus,
      };

    case ActionType.RequireAuthorization:
      return {
        ...state,
        authorization: action.payload.authStatus,
      };

    case ActionType.SetCurrentUser: {
      return {
        ...state,
        currentUser: action.payload.userData,
      };
    }

    case ActionType.RequireLogout:
      return {
        ...state,
        authorization: AuthorizationStatus.NoAuth,
      };

    case ActionType.SetCurrentHotel:
      return {
        ...state,
        currentHotel: action.payload.currentHotel,
      };

    case ActionType.SetNearOffersData:
      return {
        ...state,
        nearOffersData: action.payload.nearOffersData,
      };

    case ActionType.SetCurrentHotelComments:
      return {
        ...state,
        currentHotelComments: action.payload.currentHotelComments,
      };

    default:
      return state;
  }
};
