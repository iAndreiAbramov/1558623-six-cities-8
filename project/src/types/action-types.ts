import { AxiosInstance } from 'axios';
import { changeCityAction, loadOffersDataAction, requireAuthorization, requireLogout } from '../store/actions';
import { State } from './state';
import { ThunkAction, ThunkDispatch } from '@reduxjs/toolkit';

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
  | ReturnType<typeof requireLogout>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, ActionTypes>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, ActionTypes>;
