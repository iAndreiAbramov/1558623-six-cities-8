import { ActionType } from '../types/action-types';
import { AuthorizationStatus, FetchStatus, PostStatus } from '../const';
import { CityTypes, PointTypes } from '../types/state-types';
import { CommentsFrontTypes } from '../types/comments-types';
import { FrontUserDataTypes } from '../types/user-data-types';
import { OfferDataTypes } from '../types/offer-data-types';

export const initCityAction = (
  cityData: CityTypes,
  offersData: OfferDataTypes[],
  pointsForMap: PointTypes[],
) => ({
  type: ActionType.InitCity,
  payload: {
    cityData,
    offersData,
    pointsForMap,
  },
} as const);

export const setFetchStatus = (fetchStatus: FetchStatus) => ({
  type: ActionType.SetFetchStatus,
  payload: {
    fetchStatus,
  },
} as const);

export const setPostStatus = (postStatus: PostStatus) => ({
  type: ActionType.SetPostStatus,
  payload: {
    postStatus,
  }
} as const);

export const requireAuthorization = (authStatus: AuthorizationStatus) => ({
  type: ActionType.RequireAuthorization,
  payload: {
    authStatus,
  },
} as const);

export const requireLogout = () => ({
  type: ActionType.RequireLogout,
} as const);

export const setIsFavorite = (offersData: OfferDataTypes[]) =>({
  type: ActionType.SetIsFavorite,
  payload: offersData,
} as const);

export const setCurrentUser = (userData: FrontUserDataTypes) => ({
  type: ActionType.SetCurrentUser,
  payload: {
    userData,
  },
} as const);

export const setCurrentHotel = (currentHotel: OfferDataTypes) => ({
  type: ActionType.SetCurrentHotel,
  payload: {
    currentHotel,
  },
} as const);

export const setNearOffersData = (nearOffersData: OfferDataTypes[]) => ({
  type: ActionType.SetNearOffersData,
  payload: {
    nearOffersData,
  },
} as const);

export const setCurrentHotelComments = (currentHotelComments: CommentsFrontTypes[]) => ({
  type: ActionType.SetCurrentHotelComments,
  payload: {
    currentHotelComments,
  }
} as const);
