import { ActionType } from '../types/action-types';

export const changeCityAction = (newCityName: string) => ({
  type: ActionType.ChangeCity,
  payload: {
    name: newCityName,
  },
} as const);

export const getOffersDataAction = () => ({
  type: ActionType.GetOffersData,
} as const);
