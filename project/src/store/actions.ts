import { ActionType } from '../types/action-types';
import { AuthorizationStatus } from '../const';
import { OfferDataTypes } from '../types/offer-data-types';
import { offersData } from './reducer';

export const changeCityAction = (
  newCityName: string,
  allOffersList = offersData,
) => ({
  type: ActionType.ChangeCity,
  payload: {
    cityName: newCityName,
    offersList: allOffersList.filter((offer) => (
      offer.city.name === newCityName
    )),
  },
} as const);

export const loadOffersDataAction = (allOffersList: OfferDataTypes[]) => ({
  type: ActionType.LoadOffersData,
  payload: {
    offersList: allOffersList,
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
