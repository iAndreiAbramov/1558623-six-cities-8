import { changeCityAction, loadOffersDataAction, requireAuthorization, requireLogout } from '../store/actions';

export enum ActionType {
  ChangeCity = 'home/changeCity',
  LoadOffersData = 'data/getOffersData',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
}

export type ActionTypes =
  | ReturnType<typeof changeCityAction>
  | ReturnType<typeof loadOffersDataAction>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout>
