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
