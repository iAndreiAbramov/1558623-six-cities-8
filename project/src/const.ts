import { Icon } from 'leaflet';
import { CitiesTypes } from './types/state-types';

export enum AppRoute {
  Home = '/',
  Favorites = '/favorites',
  Login = '/login',
  OfferId = '/offer/:id',
  Offer = '/offer'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum HttpStatusCode {
  Unauthorised = 401,
}

export enum FetchStatus {
  InProgress = 'IN_PROGRESS',
  Success = 'SUCCESS',
  Error = 'ERROR',
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

export const SortOptions = {
  POPULAR: 'Popular',
  PRICE_UP: 'Price: low to high',
  PRICE_DOWN: 'Price: high to low',
  RATING_DOWN: 'Top rated first',
};

export enum APIRoute {
  Hotels = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Favorite = '/favorite',
  Comments = '/comments',
}

export const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
