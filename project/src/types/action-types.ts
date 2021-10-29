import { AxiosInstance } from 'axios';
import {
  initCityAction,
  requireAuthorization,
  requireLogout, setCurrentUser, setIsFavorite,
  setIsFetchingAction, setCurrentHotel
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
  SetCurrentHotel = 'offer/setHotelData',
}

export type ActionTypes =
  | ReturnType<typeof initCityAction>
  | ReturnType<typeof setIsFetchingAction>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout>
  | ReturnType<typeof setIsFavorite>
  | ReturnType<typeof setCurrentUser>
  | ReturnType<typeof setCurrentHotel>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, StateTypes, AxiosInstance, ActionTypes>;

export type ThunkAppDispatch = ThunkDispatch<StateTypes, AxiosInstance, ActionTypes>;
