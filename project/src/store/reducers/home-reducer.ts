import { ActionType, ActionTypes } from '../../types/action-types';
import { Cities, DEFAULT_CITY_NAME } from '../../const';
import { CityTypes, PointTypes } from '../../types/state-types';
import { OfferDataTypes } from '../../types/offer-data-types';

export type InitialStateTypes = {
  activeCity: CityTypes,
  offersData: OfferDataTypes[],
  pointsForMap: PointTypes[],
};

const initialState: InitialStateTypes = {
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
};

export const homeReducer = (state = initialState, action: ActionTypes): InitialStateTypes => {
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

    default:
      return state;
  }
};
