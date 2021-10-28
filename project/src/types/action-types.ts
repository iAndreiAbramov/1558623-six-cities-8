import { AxiosInstance } from 'axios';
import {
  initCityAction,
  requireAuthorization,
  requireLogout, setCurrentUser, setIsFavorite,
  toggleIsFetchingAction
} from '../store/actions';
import { StateTypes } from './state-types';
import { ThunkAction, ThunkDispatch } from '@reduxjs/toolkit';

export enum ActionType {
  InitCity = 'init/initCity',
  ToggleIsFetching = 'data/toggleIsFetching',
  SetIsFavorite = 'data/setIsFavorite',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  SetCurrentUser = 'user/setCurrentUser',
}

export type ActionTypes =
  | ReturnType<typeof initCityAction>
  | ReturnType<typeof toggleIsFetchingAction>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout>
  | ReturnType<typeof setIsFavorite>
  | ReturnType<typeof setCurrentUser>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, StateTypes, AxiosInstance, ActionTypes>;

export type ThunkAppDispatch = ThunkDispatch<StateTypes, AxiosInstance, ActionTypes>;
