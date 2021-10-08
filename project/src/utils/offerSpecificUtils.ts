import { getRandomArrayItem, getRandomBoolean } from './commonUtils';

const GOODS = ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'];

const IMAGES = [
  '../../public/img/apartment-01.jpg',
  '../../public/img/apartment-02.jpg',
  '../../public/img/apartment-03.jpg',
  '../../public/img/room.jpg',
  '../../public/img/studio-01.jpg',
];

const PREVIEW_IMAGES = [
  '../../public/img/apartment-small-03.jpg',
  '../../public/img/apartment-small-04.jpg',
  '../../public/img/room-small.jpg',
]

const AVATARS = [
  '../../public/img/avatar-angelina.jpg',
  '../../public/img/avatar-max.jpg',
]

const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

const NAMES = ['Angelina', 'Max'];

const ROOM_TYPES = ['apartment', 'flat', 'studio'];

export const getRandomGoods = (): string[] => GOODS.filter(() => getRandomBoolean());

export const getRandomImages = (): string[] => IMAGES.filter(() => getRandomBoolean());

export const getRandomPreviewImage = (): string => getRandomArrayItem(PREVIEW_IMAGES);

export const getRandomAvatar = (): string => getRandomArrayItem(AVATARS);

export const getRandomCity = (): string => getRandomArrayItem(CITIES);

export const getRandomName = (): string => getRandomArrayItem(NAMES);

export const getRandomRoomType = (): string => getRandomArrayItem(ROOM_TYPES);
