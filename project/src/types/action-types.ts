import { AxiosInstance } from 'axios';
import {
  initCityAction,
  requireAuthorization,
  requireLogout,
  toggleIsFetchingAction
} from '../store/actions';
import { StateTypes } from './state-types';
import { ThunkAction, ThunkDispatch } from '@reduxjs/toolkit';

export enum ActionType {
  InitCity = 'home/initCity',
  ToggleIsFetching = 'data/toggleIsFetching',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
}

export type ActionTypes =
  | ReturnType<typeof initCityAction>
  | ReturnType<typeof toggleIsFetchingAction>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, StateTypes, AxiosInstance, ActionTypes>;

export type ThunkAppDispatch = ThunkDispatch<StateTypes, AxiosInstance, ActionTypes>;
