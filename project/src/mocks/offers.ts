import { getRandomBoolean, getRandomFloat, getRandomInteger, getUniqueId } from '../utils/common-utils';
import {
  getRandomAvatar,
  getRandomGoods,
  getImages, getRandomName,
  getRandomPreviewImage, getRandomRoomType, getCityCoordinates, getOfferCoordinates
} from '../utils/offer-specific-utils';
import { DEFAULT_CITY_NAME, MAX_RATING, MIN_RATING, RATING_DECIMALS } from '../const';
import { OfferDataTypes } from '../types/offer-data-types';

export const OFFERS_NUMBER = 4;

const MIN_BEDROOMS = 1;
const MAX_BEDROOMS = 5;

const MIN_ADULTS = 1;
const MAX_ADULTS = 5;

const MIN_PRICE = 20;
const MAX_PRICE = 500;

const [cityLat, cityLng] = getCityCoordinates();
const getOffer = (): OfferDataTypes => {
  const [offerLat, offerLng] = getOfferCoordinates();
  return {
    bedrooms: getRandomInteger(MIN_BEDROOMS, MAX_BEDROOMS),
    city: {
      location: {
        latitude: cityLat,
        longitude: cityLng,
        zoom: 12,
      },
      name: DEFAULT_CITY_NAME,
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
      latitude: offerLat,
      longitude: offerLng,
      zoom: 8,
    },
    maxAdults: getRandomInteger(MIN_ADULTS, MAX_ADULTS),
    previewImage: getRandomPreviewImage(),
    price: getRandomInteger(MIN_PRICE, MAX_PRICE),
    rating: getRandomFloat(MIN_RATING, MAX_RATING, RATING_DECIMALS),
    title: 'Beautiful & luxurious studio at great location',
    type: getRandomRoomType(),
  };
};

export const getOffersData = (numberOfOffers: number): OfferDataTypes[] => {
  const offers = [];
  for (let i = 0; i < numberOfOffers; i++) {
    offers.push(getOffer());
  }

  return offers;
};
