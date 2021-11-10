import { AxiosInstance } from 'axios';
import { StateTypes } from './state-types';
import { Action, ThunkAction, ThunkDispatch } from '@reduxjs/toolkit';

export enum ActionType {
  Unknown = 'common/unknown',
  InitCity = 'init/initCity',
  SetFetchStatus = 'data/setFetchStatus',
  SetFavoritesData = 'data/setFavorites',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  SetCurrentUser = 'user/setCurrentUser',
  SetCurrentHotel = 'offer/setHotelData',
  SetNearOffersData = 'offer/setNearOffersData',
  SetCurrentHotelComments = 'offer/setCurrentHotelComments',
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, StateTypes, AxiosInstance, Action>;

export type ThunkAppDispatch = ThunkDispatch<StateTypes, AxiosInstance, Action>;
