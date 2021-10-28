import { ActionType, ActionTypes } from '../types/action-types';
import { AuthorizationStatus, Cities, DEFAULT_CITY_NAME, DEFAULT_USER_DATA, FetchStatus } from '../const';
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
  currentUser: DEFAULT_USER_DATA,
  currentOffer: {
    offerData: {},
    nearOffersData: [],
    commentsData: [],
  },
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

    case ActionType.ToggleIsFetching:
      return {
        ...state,
        fetchStatus: action.payload.isFetching,
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

    case ActionType.SetIsFavorite:
      return {
        ...state,
        // offersData: action.payload.offersData,
      };

    default:
      return state;
  }
};
