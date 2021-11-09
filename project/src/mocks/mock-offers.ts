import { Cities } from '../const';

export const offerFirst = {
  bedrooms: 1,
  city: Cities['Paris'],
  description: 'string',
  goods: ['1', '2', '3'],
  host: {
    avatarUrl: 'someUrl',
    id: '1',
    isPro: true,
    name: 'Vasya',
  },
  id: '1',
  images: ['1', '2', '3'],
  isFavorite: false,
  isPremium: true,
  location: {
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 13,
  },
  maxAdults: 2,
  previewImage: 'someImg',
  price: 400,
  rating: 2.0,
  title: 'Nice place first',
  type: 'Flat',
};

export const offerSecond = {
  bedrooms: 1,
  city: Cities['Cologne'],
  description: 'string',
  goods: ['1', '2', '3'],
  host: {
    avatarUrl: 'someUrl',
    id: '2',
    isPro: true,
    name: 'Vasya',
  },
  id: '2',
  images: ['1', '2', '3'],
  isFavorite: false,
  isPremium: true,
  location: {
    latitude: 50.938361,
    longitude: 6.959974,
    zoom: 13,
  },
  maxAdults: 2,
  previewImage: 'someImg',
  price: 100,
  rating: 3.0,
  title: 'Nice place second',
  type: 'Flat',
};

export const offerThird = {
  bedrooms: 1,
  city: Cities['Cologne'],
  description: 'string',
  goods: ['1', '2', '3'],
  host: {
    avatarUrl: 'someUrl',
    id: '3',
    isPro: true,
    name: 'Vasya',
  },
  id: '3',
  images: ['1', '2', '3'],
  isFavorite: false,
  isPremium: true,
  location: {
    latitude: 50.938361,
    longitude: 6.959974,
    zoom: 13,
  },
  maxAdults: 2,
  previewImage: 'someImg',
  price: 200,
  rating: 4.0,
  title: 'Nice place third',
  type: 'Flat',
};

export const offerFourth = {
  bedrooms: 1,
  city: Cities['Paris'],
  description: 'string',
  goods: ['1', '2', '3'],
  host: {
    avatarUrl: 'someUrl',
    id: '4',
    isPro: true,
    name: 'Vasya',
  },
  id: '4',
  images: ['1', '2', '3'],
  isFavorite: false,
  isPremium: true,
  location: {
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 13,
  },
  maxAdults: 2,
  previewImage: 'someImg',
  price: 300,
  rating: 5.0,
  title: 'Nice place fourth',
  type: 'Flat',
};

export const offersFrontMock = [offerFirst, offerSecond, offerThird, offerFourth] as const;
export const nearOffersMock = [offerSecond, offerThird, offerFourth] as const;

export const pointsMock = [
  { latitude: 48.85661, longitude: 2.351499, id: '1' },
  { latitude: 50.938361, longitude: 6.959974, id: '2' },
];

export const offersPopularMock = [offerFirst, offerSecond, offerThird, offerFourth] as const;

export const offersByRatingDownMock = [offerFourth, offerThird, offerSecond, offerFirst] as const;

export const offersByPriceDownMock = [offerFirst, offerFourth, offerThird, offerSecond] as const;

export const offersByPriceUpMock = [offerSecond, offerThird, offerFourth, offerFirst] as const;

export const offersByCitiesMock = {
  'Paris': [offerFirst, offerFourth],
  'Cologne': [offerSecond, offerThird],
};

export const offerBackFirst = {
  bedrooms: 1,
  city: Cities['Paris'],
  description: 'string',
  goods: ['1', '2', '3'],
  host: {
    ['avatar_url']: 'someUrl',
    id: '1',
    ['is_pro']: true,
    name: 'Vasya',
  },
  id: '1',
  images: ['1', '2', '3'],
  ['is_favorite']: false,
  ['is_premium']: true,
  location: {
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 13,
  },
  ['max_adults']: 2,
  ['preview_image']: 'someImg',
  price: 400,
  rating: 2.0,
  title: 'Nice place',
  type: 'Flat',
};

export const offerBackSecond = {
  bedrooms: 1,
  city: Cities['Cologne'],
  description: 'string',
  goods: ['1', '2', '3'],
  host: {
    ['avatar_url']: 'someUrl',
    id: '2',
    ['is_pro']: true,
    name: 'Vasya',
  },
  id: '2',
  images: ['1', '2', '3'],
  ['is_favorite']: false,
  ['is_premium']: true,
  location: {
    latitude: 50.938361,
    longitude: 6.959974,
    zoom: 13,
  },
  ['max_adults']: 2,
  ['preview_image']: 'someImg',
  price: 100,
  rating: 3.0,
  title: 'Nice place',
  type: 'Flat',
};

export const offersBackMock = [offerBackFirst, offerBackSecond];
