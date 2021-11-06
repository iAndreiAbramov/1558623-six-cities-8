export const offerFirst = {
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
  price: 400,
  rating: 2.0,
  title: 'Nice place',
  type: 'Flat',
};

export const offerSecond = {
  bedrooms: 1,
  city: {
    location: {
      latitude: 52,
      longitude: 4,
      zoom: 13,
    },
    name: 'Cologne',
  },
  description: 'string',
  goods: ['1', '2', '3'],
  host: {
    avatarUrl: 'someUrl',
    id: '2',
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
  price: 100,
  rating: 3.0,
  title: 'Nice place',
  type: 'Flat',
};

export const offerThird = {
  bedrooms: 1,
  city: {
    location: {
      latitude: 52,
      longitude: 4,
      zoom: 13,
    },
    name: 'Cologne',
  },
  description: 'string',
  goods: ['1', '2', '3'],
  host: {
    avatarUrl: 'someUrl',
    id: '1',
    isPro: true,
    name: 'Vasya',
  },
  id: '3',
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
  rating: 4.0,
  title: 'Nice place',
  type: 'Flat',
};

export const offerFourth = {
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
    id: '4',
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
  price: 300,
  rating: 5.0,
  title: 'Nice place',
  type: 'Flat',
};

export const offersFrontMock = [offerFirst, offerSecond, offerThird, offerFourth] as const;

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
    latitude: 43,
    longitude: 3,
    zoom: 10,
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
  city: {
    location: {
      latitude: 52,
      longitude: 4,
      zoom: 13,
    },
    name: 'Cologne',
  },
  description: 'string',
  goods: ['1', '2', '3'],
  host: {
    ['avatar_url']: 'someUrl',
    id: '2',
    ['is_pro']: true,
    name: 'Vasya',
  },
  id: '1',
  images: ['1', '2', '3'],
  ['is_favorite']: false,
  ['is_premium']: true,
  location: {
    latitude: 43,
    longitude: 3,
    zoom: 10,
  },
  ['max_adults']: 2,
  ['preview_image']: 'someImg',
  price: 100,
  rating: 3.0,
  title: 'Nice place',
  type: 'Flat',
};

export const offersBackMock = [offerBackFirst, offerBackSecond];
