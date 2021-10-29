import { AuthorizationStatus } from '../const';
import { OfferDataTypes } from './offer-data-types';
import { FrontUserDataTypes } from './user-data-types';

export type CityTypes = {
  name: string,
  location: CityLocationTypes,
}

export type CityLocationTypes = {
  latitude: number,
  longitude: number,
  zoom: number,
}

export type PointTypes = {
  latitude: number,
  longitude: number,
  id: string,
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
  fetchStatus: string,
  activeCity: CityTypes,
  offersData: OfferDataTypes[],
  pointsForMap: PointTypes[],
  authorization: AuthorizationStatus,
  currentUser: FrontUserDataTypes,
  currentHotel: OfferDataTypes,
}
