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
