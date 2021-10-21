import { changeCityAction, getOffersDataAction } from '../store/actions';

export enum ActionType {
  ChangeCity = 'changeCity',
  GetOffersData = 'getOffersData',
}

export type ActionTypes =
  | ReturnType<typeof changeCityAction>
  | ReturnType<typeof getOffersDataAction>;
