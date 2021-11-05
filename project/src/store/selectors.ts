import { AuthorizationStatus, FetchStatus } from '../const';
import { CityTypes, PointTypes } from '../types/state-types';
import { CommentsFrontTypes } from '../types/comments-types';
import { FrontUserDataTypes } from '../types/user-data-types';
import { NameSpace, RootStateTypes } from './reducers/root-reducer';
import { OfferDataTypes } from '../types/offer-data-types';

export const getAuthorizationStatus = (state: RootStateTypes): AuthorizationStatus => state[NameSpace.User].authorization;
export const getCurrentUserData = (state: RootStateTypes): FrontUserDataTypes => state[NameSpace.User].currentUserData;

export const getFetchStatus = (state: RootStateTypes): FetchStatus => state[NameSpace.Status].fetchStatus;

export const getCurrentHotel = (state: RootStateTypes): OfferDataTypes => state[NameSpace.Offer].currentHotel;
export const getNearOffersData = (state: RootStateTypes): OfferDataTypes[] => state[NameSpace.Offer].nearOffersData;
export const getCurrentHotelComments = (state: RootStateTypes): CommentsFrontTypes[] => state[NameSpace.Offer].currentHotelComments;

export const getFavoritesData = (state: RootStateTypes): OfferDataTypes[] => state[NameSpace.Favorites].favoritesData;

export const getActiveCity = (state: RootStateTypes): CityTypes => state[NameSpace.Home].activeCity;
export const getOffersData = (state: RootStateTypes): OfferDataTypes[] => state[NameSpace.Home].offersData;
export const getPointsForMap = (state: RootStateTypes): PointTypes[] => state[NameSpace.Home].pointsForMap;
