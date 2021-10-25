import { AxiosInstance } from 'axios';
import { changeCityAction, loadOffersDataAction, requireAuthorization, requireLogout } from '../store/actions';
import { StateTypes } from './state-types';
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

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, StateTypes, AxiosInstance, ActionTypes>;

export type ThunkAppDispatch = ThunkDispatch<StateTypes, AxiosInstance, ActionTypes>;
