import { CommentsFrontTypes } from '../types/comments-types';
import { getMillisecondsFromDate } from './common-utils';
import { MAX_COMMENTS_TO_SHOW, MAX_RATING, NotificationMessage, PERCENTS_CAP, SortOptions } from '../const';
import { OfferDataTypes } from '../types/offer-data-types';
import { OffersByCitiesTypes } from '../types/offer-sprecific-utils-types';
import { ReactText } from 'react';
import { toast } from 'react-toastify';

export const getOffersByCities = (data: OfferDataTypes[]): OffersByCitiesTypes => {
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

export const getVisualRating = (rating: number): string => `${ Math.round(rating) * PERCENTS_CAP / MAX_RATING }%`;

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
