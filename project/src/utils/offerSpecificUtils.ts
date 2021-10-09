import { getRandomArrayItem, getRandomBoolean } from './commonUtils';
import { OfferDataTypes } from '../types/offer-data-types';
import { OffersByCitiesTypes } from '../types/favorites-types';

const GOODS = ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'];

const IMAGES = [
  './public/img/apartment-01.jpg',
  './public/img/apartment-02.jpg',
  './public/img/apartment-03.jpg',
  './public/img/room.jpg',
  './public/img/studio-01.jpg',
];

const PREVIEW_IMAGES = [
  './img/apartment-small-03.jpg',
  './img/apartment-small-04.jpg',
  './img/room-small.jpg',
];

const AVATARS = [
  './img/avatar-angelina.jpg',
  './img/avatar-max.jpg',
];

const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

const NAMES = ['Angelina', 'Max'];

const ROOM_TYPES = ['Apartment', 'Flat', 'Studio', 'Castle'];

export const getRandomGoods = (): string[] => GOODS.filter(() => getRandomBoolean());

export const getRandomImages = (): string[] => IMAGES.filter(() => getRandomBoolean());

export const getRandomPreviewImage = (): string => getRandomArrayItem(PREVIEW_IMAGES);

export const getRandomAvatar = (): string => getRandomArrayItem(AVATARS);

export const getRandomCity = (): string => getRandomArrayItem(CITIES);

export const getRandomName = (): string => getRandomArrayItem(NAMES);

export const getRandomRoomType = (): string => getRandomArrayItem(ROOM_TYPES);

export const getOffersByCities = (data: OfferDataTypes[]) => {
  const offersByCities: OffersByCitiesTypes = {};

  data.forEach((item) => {
    const city: string = item.city.name;
    if (city in offersByCities) {
      offersByCities[city].push(item);
    } else {
      offersByCities[city] = [item];
    }
  });

  return offersByCities;
};
