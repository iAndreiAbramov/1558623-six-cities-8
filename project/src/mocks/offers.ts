export const offer = {
  bedrooms: 1,
  city: {
    location: {
      latitude: 52,
      longitude: 4,
      zoom: 13,
    },
    name: 'Paris',
  },
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
    latitude: 43,
    longitude: 3,
    zoom: 10,
  },
  maxAdults: 2,
  previewImage: 'someImg',
  price: 200,
  rating: 3,
  title: 'Nice place',
  type: 'Flat',
};

const offerFirst = Object.assign({}, offer);
const offerSecond = Object.assign({}, offer);
const offerThird = Object.assign({}, offer);
const offerFourth = Object.assign({}, offer);

offerFirst.rating = 2.0;
offerSecond.rating = 3.0;
offerThird.rating = 4.0;
offerFourth.rating = 5.0;

offerFirst.price = 400;
offerSecond.price = 100;
offerThird.price = 200;
offerFourth.price = 300;

export const offersMock = [offerFirst, offerSecond, offerThird, offerFourth] as const;

export const offersPopularMock = [offerFirst, offerSecond, offerThird, offerFourth] as const;

export const offersByRatingDownMock = [offerFourth, offerThird, offerSecond, offerFirst] as const;

export const offersByPriceDownMock = [offerFirst, offerFourth, offerThird, offerSecond] as const;

export const offersByPriceUpMock = [offerSecond, offerThird, offerFourth, offerFirst] as const;
