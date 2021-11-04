import { MAX_RATING, NotificationMessage, PERCENTS_CAP, SortOptions } from '../const';
import { toast } from 'react-toastify';
import { OfferDataTypes } from '../types/offer-data-types';

export const getRandomInteger = (min: number, max: number): number => {
  let startValue = Math.ceil(Math.min(min, max));
  let endValue = Math.floor(Math.max(min, max));
  startValue -= 0.5;
  endValue += 0.5;
  const randomInteger = startValue + Math.random() * (endValue - startValue);
  return Math.round(randomInteger);
};

export const getRandomArrayItem = <T>(array: T[]): T => array[getRandomInteger(0, array.length - 1)];

export const getVisualRating = (rating: number): string => `${ Math.round(rating) * PERCENTS_CAP / MAX_RATING }%`;

export const getMillisecondsFromDate = (date: string): number => (
  Date.parse(date.split(' ').reverse().join('-'))
);

export const notifySuccess = (message: NotificationMessage) => toast.success(message, {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
});

export const notifyError = (message: NotificationMessage) => toast.error(message, {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
});

export const getSortedData = (data: OfferDataTypes[], option: SortOptions): OfferDataTypes[] => {
  switch (option) {
    case SortOptions.PriceUp:
      return [...data].sort((a, b) => a.price - b.price);
    case SortOptions.PriceDown:
      return [...data].sort((a, b) => b.price - a.price);
    case SortOptions.RatingDown:
      return [...data].sort((a, b) => b.rating - a.rating);
    default:
      return [...data];
  }
};
