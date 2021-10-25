import { AuthorizationStatus } from '../const';
import { OfferDataTypes } from './offer-data-types';

export type CityTypes = {
  location: {
    latitude: number,
    longitude: number,
    zoom: number,
  },
  name: string,
}

export type PointTypes = {
  latitude: number,
  longitude: number,
  offerId: string,
}

export type CitiesTypes = {
  [name: string]: {
    location: {
      latitude: number,
      longitude: number,
      zoom: number,
    },
    name: string,
  }
}

export type StateTypes = {
  activeCity: CityTypes,
  offersData: OfferDataTypes[],
  authorization: AuthorizationStatus;
}
