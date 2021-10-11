import { getRandomBoolean, getRandomFloat, getRandomInteger, getUniqueId } from '../utils/common-utils';
import {
  getRandomAvatar,
  getRandomCity,
  getRandomGoods,
  getImages, getRandomName,
  getRandomPreviewImage, getRandomRoomType
} from '../utils/offer-specific-utils';
import { OfferDataTypes } from '../types/offer-data-types';
import { MAX_RATING, MIN_RATING, RATING_DECIMALS } from '../const';

export const OFFERS_NUMBER = 10;

const MIN_BEDROOMS = 1;
const MAX_BEDROOMS = 5;

const MIN_ADULTS = 1;
const MAX_ADULTS = 5;

const MIN_PRICE = 20;
const MAX_PRICE = 500;

const getOffer = (): OfferDataTypes => ({
  bedrooms: getRandomInteger(MIN_BEDROOMS, MAX_BEDROOMS),
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10,
    },
    name: getRandomCity(),
  },
  description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  goods: getRandomGoods(),
  host: {
    avatarUrl: getRandomAvatar(),
    id: getUniqueId(),
    isPro: getRandomBoolean(),
    name: getRandomName(),
  },
  id: getUniqueId(),
  images: getImages(),
  isFavorite: getRandomBoolean(),
  isPremium: getRandomBoolean(),
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8,
  },
  maxAdults: getRandomInteger(MIN_ADULTS, MAX_ADULTS),
  previewImage: getRandomPreviewImage(),
  price: getRandomInteger(MIN_PRICE, MAX_PRICE),
  rating: getRandomFloat(MIN_RATING, MAX_RATING, RATING_DECIMALS),
  title: 'Beautiful & luxurious studio at great location',
  type: getRandomRoomType(),
});

export const getOffersData = (numberOfOffers: number): OfferDataTypes[] => {
  const offers = [];
  for (let i = 0; i < numberOfOffers; i++) {
    offers.push(getOffer());
  }

  return offers;
};
