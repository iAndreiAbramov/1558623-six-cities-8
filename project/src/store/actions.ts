import { ActionType } from '../types/action-types';
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

export const getOffersDataAction = () => ({
  type: ActionType.GetOffersData,
} as const);
