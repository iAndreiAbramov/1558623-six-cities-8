import { MAX_RATING, PERCENTS_CAP } from '../const';

export const getRandomInteger = (min: number, max: number): number => {
  let startValue = Math.ceil(Math.min(min, max));
  let endValue = Math.floor(Math.max(min, max));
  startValue -= 0.5;
  endValue += 0.5;
  const randomInteger = startValue + Math.random() * (endValue - startValue);
  return Math.round(randomInteger);
};

export const getRandomFloat = (min: number, max: number, decimals: number): number => {
  const startValue = Math.min(min, max);
  const endValue = Math.max(min, max);
  const randomInteger = startValue + Math.random() * (endValue - startValue);
  return +randomInteger.toFixed(decimals);
};

export const getRandomBoolean = (): boolean => Boolean(Math.round(Math.random()));

export const getUniqueId = (digits = 9): string => {
  const dateNow = Date.now();
  const getUniqueNumber = (): number => {
    const id = Date.now();
    if (dateNow !== id) {
      return id;
    }
    return getUniqueNumber();
  };
  return getUniqueNumber().toString().slice(-digits);
};

export const getRandomArrayItem = <T>(array: T[]): T => array[getRandomInteger(0, array.length - 1)];

export const getVisualRating = (rating: number): string => `${ Math.round(rating) * PERCENTS_CAP / MAX_RATING }%`;
