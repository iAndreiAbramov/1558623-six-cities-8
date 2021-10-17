import { City } from './types/map-types';
import { Icon } from 'leaflet';

export enum AppRoute {
  Home = '/',
  Login = '/login',
  Favorites = '/favorites',
  OfferId = '/offer/:id',
  Offer = '/offer'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
}

export const PERCENTS_CAP = 100;
export const MIN_RATING = 1;
export const MAX_RATING = 5;
export const RATING_DECIMALS = 1;

export enum RatingPosition {
  Perfect = 4,
  Good = 3,
  NotBad = 2,
  Badly = 1,
  Terribly = 0,
}

export const INITIAL_RATING = [false, false, false, false, false];
export const INITIAL_REVIEW_STATE = '';
export const MIN_COMMENT_LENGTH = 50;

export const DEFAULT_CITY: City = {
  location: {
    latitude: 52.38310503,
    longitude: 4.893703165,
    zoom: 12,
  },
  name: 'Amsterdam',
};

export const URL_MARKER_DEFAULT = './img/pin.svg';
export const URL_MARKER_ACTIVE = './img/pin-active.svg';

export const DefaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

export const ActiveCustomIcon = new Icon({
  iconUrl: URL_MARKER_ACTIVE,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

export const CardArticleClasses = {
  MAIN_PAGE_LIST: 'cities__place-card',
  NEARBY_LIST: 'near-places__card',
};

export const CardImgWrapperClasses = {
  MAIN_PAGE_LIST: 'cities__image-wrapper',
  NEARBY_LIST: 'near-places__image-wrapper',
};
