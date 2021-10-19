import { getOffersData } from '../mocks/offers';
import { OfferDataTypes } from '../types/offer-data-types';

type OffersListStateType = {
  cityName: string,
  offersList: OfferDataTypes[],
};

const DEFAULT_CITY = 'Paris';
const NUMBER_OF_OFFERS = 20;
const initialOffersList = getOffersData(NUMBER_OF_OFFERS);
