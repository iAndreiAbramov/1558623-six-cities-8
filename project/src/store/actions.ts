import { ActionType } from '../types/action-types';
import { AuthorizationStatus } from '../const';
import { OfferDataTypes } from '../types/offer-data-types';
import { PointTypes } from '../types/state-types';

export const changeCityAction = (
  newCityName: string,
) => ({
  type: ActionType.ChangeCity,
  payload: {
    cityName: newCityName,
  },
} as const);

export const loadOffersDataAction = (offersList: OfferDataTypes[], pointsForMap: PointTypes[]) => ({
  type: ActionType.LoadOffersData,
  payload: {
    offersList,
    pointsForMap,
  },
} as const);

export const requireAuthorization = (authStatus: AuthorizationStatus) => ({
  type: ActionType.RequireAuthorization,
  payload: {
    authStatus,
  },
} as const);

export const requireLogout = () => ({
  type: ActionType.RequireLogout,
} as const);
