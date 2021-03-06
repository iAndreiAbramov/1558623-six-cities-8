import { Icon } from 'leaflet';
import { CitiesTypes } from './types/state-types';

export enum AppRoute {
  Home = '/',
  Favorites = '/favorites',
  Login = '/login',
  OfferId = '/offer/:id',
  Offer = '/offer',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum HttpStatusCode {
  Ok = 200,
  NoContent = 204,
  Unauthorised = 401,
}

export enum FetchStatus {
  InProgress = 'IN_PROGRESS',
  Success = 'SUCCESS',
  Error = 'ERROR',
  Default = 'SUCCESS',
}

export const FETCH_FAIL_MESSAGE = 'Failed to get data from server. Please check your network connection and try to reload the page.';

export enum NotificationMessage {
  PostSuccess = 'Your comment successfully posted!',
  PostError = 'Sorry, your comment wasn\'t posted!',
  AuthError = 'Authorization failed. Please enter correct email and password.',
  ConnectionError = 'Sorry, action can\'t be performed. Please check your network connection.',
  Unauthorized = 'Please sign in to perform this action.',
  SignIn = 'Sign in to get more functions',
}

export enum IsFavoriteValue {
  Favorite = '1',
  NotFavorite = '0',
}

export const DEFAULT_USER_DATA = {
  avatarUrl: '../../public/img/avatar.svg',
  email: '',
  id: '',
  isPro: false,
  name: '',
} as const;

export const DEFAULT_HOTEL_DATA = {
  bedrooms: 0,
  city: {
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 0,
    },
    name: '',
  },
  description: '',
  goods: [''],
  host: {
    avatarUrl: '',
    id: '',
    isPro: false,
    name: '',
  },
  id: '',
  images: [''],
  isFavorite: false,
  isPremium: false,
  location: {
    latitude: 0,
    longitude: 0,
    zoom: 0,
  },
  maxAdults: 0,
  previewImage: '',
  price: 0,
  rating: 0,
  title: '',
  type: '',
};

export const Cities: CitiesTypes = {
  'Paris': {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13,
    },
  },
  'Cologne': {
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13,
    },
  },
  'Brussels': {
    name: 'Brussels',
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13,
    },
  },
  'Amsterdam': {
    name: 'Amsterdam',
    location: {
      latitude: 52.38310503,
      longitude: 4.893703165,
      zoom: 13,
    },
  },
  'Hamburg': {
    name: 'Hamburg',
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13,
    },
  },
  'Dusseldorf': {
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13,
    },
  },
};

export const DEFAULT_CITY_NAME = 'Paris';
export const TEST_CITY_NAME = 'Cologne';

export const PERCENTS_CAP = 100;
export const MAX_RATING = 5;

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
export const MAX_COMMENTS_TO_SHOW = 10;
export const MAX_IMAGES_NUMBER = 6;

export enum MapMarker {
  Default = './img/pin.svg',
  Active = './img/pin-active.svg',
}

export const DEFAULT_CUSTOM_ICON = new Icon({
  iconUrl: MapMarker.Default,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

export const ACTIVE_CUSTOM_ICON = new Icon({
  iconUrl: MapMarker.Active,
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

export enum SortOptions {
  Popular = 'Popular',
  PriceUp = 'Price: low to high',
  PriceDown = 'Price: high to low',
  RatingDown = 'Top rated first',
}

export enum APIRoute {
  Hotels = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Favorite = '/favorite',
  Comments = '/comments',
}

export const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
