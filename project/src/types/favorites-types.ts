import { OfferDataTypes } from './offer-data-types';

export type FavoritesTypes = {
  favoritesData: OfferDataTypes[];
}

export type OffersByCitiesTypes = {
  [city: string]: OfferDataTypes[],
}

export type FavoritesCityTypes = {
  key?: string,
  cityName: string,
  data: OfferDataTypes[],
}

export type FavoritesCardTypes = {
  key?: string,
  data: OfferDataTypes,
}
