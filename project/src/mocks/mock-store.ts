import { AuthorizationStatus, Cities, DEFAULT_CITY_NAME, FetchStatus } from '../const';
import { nearOffersMock, offerFirst, offersFrontMock, pointsMock } from './mock-offers';
import { defaultComments } from './mock-comments';
import { OfferDataTypes } from '../types/offer-data-types';
import { CityTypes, PointTypes } from '../types/state-types';
import { CommentsFrontTypes } from '../types/comments-types';

export type MockStoreTypes = {
  FAVORITES: {
    favoritesData: OfferDataTypes[],
  },
  HOME: {
    activeCity: CityTypes,
    offersData: OfferDataTypes[],
    pointsForMap: PointTypes[],
  },
  OFFER: {
    currentHotel: OfferDataTypes,
    nearOffersData: OfferDataTypes[],
    currentHotelComments: CommentsFrontTypes[],
  },
  STATUS: { fetchStatus: FetchStatus },
  USER: {
    authorization: AuthorizationStatus,
    currentUserData: {
      email: string,
    },
  },
}

export const mockStoreWithAuth: MockStoreTypes = {
  STATUS: { fetchStatus: FetchStatus.Success },
  USER: {
    authorization: AuthorizationStatus.Auth,
    currentUserData: {
      email: 'fake@email.com',
    },
  },
  HOME: {
    activeCity: Cities[DEFAULT_CITY_NAME],
    offersData: offersFrontMock.slice(),
    pointsForMap: pointsMock,
  },
  OFFER: {
    currentHotel: offerFirst,
    nearOffersData: nearOffersMock.slice(),
    currentHotelComments: defaultComments,
  },
  FAVORITES: {
    favoritesData: offersFrontMock.slice(),
  },
};

export const mockStoreWithNoAuth: MockStoreTypes = {
  STATUS: { fetchStatus: FetchStatus.Success },
  USER: {
    authorization: AuthorizationStatus.NoAuth,
    currentUserData: {
      email: 'fake@email.com',
    },
  },
  HOME: {
    activeCity: Cities[DEFAULT_CITY_NAME],
    offersData: offersFrontMock.slice(),
    pointsForMap: pointsMock,
  },
  OFFER: {
    currentHotel: offerFirst,
    nearOffersData: nearOffersMock.slice(),
    currentHotelComments: defaultComments,
  },
  FAVORITES: {
    favoritesData: offersFrontMock.slice(),
  },
};
