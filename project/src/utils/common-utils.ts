import { ReactText } from 'react';
import { MAX_COMMENTS_TO_SHOW, MAX_RATING, NotificationMessage, PERCENTS_CAP, SortOptions } from '../const';
import { toast } from 'react-toastify';
import { OfferDataTypes } from '../types/offer-data-types';
import { CommentsFrontTypes } from '../types/comments-types';

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
  Date.parse(date)
);

export const notifySuccess = (message: NotificationMessage): ReactText => toast.success(message, {
  position: 'top-right',
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
});

export const notifyError = (message: NotificationMessage): ReactText => toast.error(message, {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
});

export const notifyInfo = (message: NotificationMessage): ReactText => toast.info(message, {
  position: 'top-right',
  autoClose: 2000,
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

export const sortCommentsByDate = <T extends CommentsFrontTypes>(comments: T[]): T[] => (
  comments
    .slice()
    .sort((a, b) => (
      getMillisecondsFromDate(a.date) - getMillisecondsFromDate(b.date)
    ))
    .slice(-MAX_COMMENTS_TO_SHOW)
);
