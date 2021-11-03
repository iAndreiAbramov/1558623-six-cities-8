import { MAX_RATING, PERCENTS_CAP } from '../const';
import { toast } from 'react-toastify';

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

export const notifySuccess = (message: string) => toast.success(message, {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
});

export const notifyError = (message: string) => toast.error(message, {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
});
