import { getRandomBoolean, getRandomFloat, getRandomInteger, getUniqueId } from '../utils/commonUtils';
import {
  getRandomAvatar,
  getRandomCity,
  getRandomGoods,
  getRandomImages, getRandomName,
  getRandomPreviewImage, getRandomRoomType
} from '../utils/offerSpecificUtils';
import { OfferDataTypes } from '../types/offer-data-types';

const getOffer = (): OfferDataTypes => ({
  bedrooms: getRandomInteger(1, 5),
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
  images: getRandomImages(),
  isFavorite: getRandomBoolean(),
  isPremium: getRandomBoolean(),
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8
  },
  maxAdults: getRandomInteger(1, 5),
  previewImage: getRandomPreviewImage(),
  price: getRandomInteger(20, 200),
  rating: getRandomFloat(1, 5, 1),
  title: 'Beautiful & luxurious studio at great location',
  type: getRandomRoomType(),
});

const getOffersData = (numberOfOffers: number): OfferDataTypes[] => {
  const offers = [];
  for (let i = 0; i < numberOfOffers; i++) {
    offers.push(getOffer());
  };

  return offers;
};

export { getOffersData };
