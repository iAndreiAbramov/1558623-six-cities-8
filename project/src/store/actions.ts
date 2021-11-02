import { createAction } from '@reduxjs/toolkit';
import { ActionType } from '../types/action-types';
import { AuthorizationStatus, FetchStatus } from '../const';
import { CityTypes, PointTypes } from '../types/state-types';
import { CommentsFrontTypes } from '../types/comments-types';
import { FrontUserDataTypes } from '../types/user-data-types';
import { OfferDataTypes } from '../types/offer-data-types';

export const initCityAction = createAction(
  ActionType.InitCity,
  (cityData: CityTypes, offersData: OfferDataTypes[], pointsForMap: PointTypes[]) => ({
    payload: {
      cityData,
      offersData,
      pointsForMap,
    },
  }),
);

export const setFetchStatus = createAction(
  ActionType.SetFetchStatus,
  (fetchStatus: FetchStatus) => ({
    payload: fetchStatus,
  }),
);

export const requireAuthorization = createAction(
  ActionType.RequireAuthorization,
  (authStatus: AuthorizationStatus) => ({
    payload: authStatus,
  }),
);

export const requireLogout = createAction(ActionType.RequireLogout);

export const setCurrentUser = createAction(
  ActionType.SetCurrentUser,
  (userData: FrontUserDataTypes) => ({
    payload: userData,
  }),
);

export const setIsFavorite = createAction(
  ActionType.SetIsFavorite,
  (offersData: OfferDataTypes[]) => ({
    payload: offersData,
  }),
);

export const setCurrentHotel = createAction(
  ActionType.SetCurrentHotel,
  (currentHotel: OfferDataTypes) => ({
    payload: currentHotel,
  }),
);

export const setNearOffersData = createAction(
  ActionType.SetNearOffersData,
  (nearOffersData: OfferDataTypes[]) => ({
    payload: nearOffersData,
  }),
);

export const setCurrentHotelComments = createAction(
  ActionType.SetCurrentHotelComments,
  (currentHotelComments: CommentsFrontTypes[]) => ({
    payload: currentHotelComments,
  }),
);

export const setFavoritesData = createAction(
  ActionType.SetFavoritesData,
  (favoritesData: OfferDataTypes[]) => ({
    payload: favoritesData,
  }),
);
