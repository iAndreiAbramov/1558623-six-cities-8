import { ActionType, ChangeCityActionType, GetOffersDataActionType } from '../types/action-types';

export const changeCityAction = (newCityName: string): ChangeCityActionType => ({
  type: ActionType.ChangeCity,
  payload: {
    name: newCityName,
  },
});

export const getOffersDataAction = (): GetOffersDataActionType  => ({
  type: ActionType.GetOffersData,
});
