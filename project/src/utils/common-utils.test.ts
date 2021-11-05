import {
  getMillisecondsFromDate,
  getRandomArrayItem,
  getRandomInteger,
  getSortedData,
  getVisualRating
} from './common-utils';
import {
  offersByPriceDownMock,
  offersByPriceUpMock,
  offersByRatingDownMock,
  offersMock,
  offersPopularMock
} from '../mocks/offers';
import { SortOptions } from '../const';

describe('Function: getRandomInteger', () => {
  it('should return a number, which is greater or equal than -5', () => {
    expect(getRandomInteger(-5, 5)).toBeGreaterThanOrEqual(-5);
  });
  it('should return a number, which is less or equal than 5', () => {
    expect(getRandomInteger(-5, 5)).toBeLessThanOrEqual(5);
  });
});

describe('Function: getRandomArrayItem', () => {
  it('should return random item from given array', () => {
    const cities = ['Paris', 'Amsterdam', 'Cologne', 'Dusseldorf'];
    expect(cities).toContain(getRandomArrayItem(cities));
  });
});

describe('Function getVisualRating', () => {
  it('should round given float from 0 to 5, than convert the result to percents, where 0 is 0% and 5 is 100% and return a string with "%"' +
    '  at the end', () => {
    expect(getVisualRating(2.5)).toBe('60%');
    expect(getVisualRating(2.4)).toBe('40%');
    expect(getVisualRating(0)).toBe('0%');
    expect(getVisualRating(5)).toBe('100%');
  });
});

describe('Function getMillisecondsFromDate', () => {
  it('should transform given date string to milliseconds', () => {
    expect(getMillisecondsFromDate('Fri Nov 05 2021 18:19:26 GMT+0300 (GMT+03:00)'))
      .toBe(1636125566000);
  });
});

describe('Function getSortedData', () => {
  it('should return an array as OfferDataTypes[], sorted in accordance to sort option as SortOptions', () => {
    expect(getSortedData(offersMock.slice(), SortOptions.Popular))
      .toEqual(offersPopularMock);
    expect(getSortedData(offersMock.slice(), SortOptions.PriceDown))
      .toEqual(offersByPriceDownMock);
    expect(getSortedData(offersMock.slice(), SortOptions.PriceUp))
      .toEqual(offersByPriceUpMock);
    expect(getSortedData(offersMock.slice(), SortOptions.RatingDown))
      .toEqual(offersByRatingDownMock);
  });
});
