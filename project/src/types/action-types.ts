import { AxiosInstance } from 'axios';
import {
  initCityAction,
  requireAuthorization,
  requireLogout, setCurrentUser, setIsFavorite,
  setFetchStatus, setCurrentHotel, setNearOffersData, setCurrentHotelComments, setPostStatus
} from '../store/actions';
import { StateTypes } from './state-types';
import { ThunkAction, ThunkDispatch } from '@reduxjs/toolkit';

export enum ActionType {
  InitCity = 'init/initCity',
  SetFetchStatus = 'data/setFetchStatus',
  SetPostStatus = 'data/setPostStatus',
  SetIsFavorite = 'data/setIsFavorite',
  AddNewComment = 'data/addNewComment',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  SetCurrentUser = 'user/setCurrentUser',
  SetCurrentHotel = 'offer/setHotelData',
  SetNearOffersData = 'offer/setNearOffersData',
  SetCurrentHotelComments = 'offer/setCurrentHotelComments',
}

export type ActionTypes =
  | ReturnType<typeof initCityAction>
  | ReturnType<typeof setFetchStatus>
  | ReturnType<typeof setPostStatus>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout>
  | ReturnType<typeof setIsFavorite>
  | ReturnType<typeof setCurrentUser>
  | ReturnType<typeof setCurrentHotel>
  | ReturnType<typeof setNearOffersData>
  | ReturnType<typeof setCurrentHotelComments>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, StateTypes, AxiosInstance, ActionTypes>;

export type ThunkAppDispatch = ThunkDispatch<StateTypes, AxiosInstance, ActionTypes>;
