import { defaultComments, sortedComments } from '../mocks/mock-comments';
import { getOffersByCities, getSortedOffers, getVisualRating, sortCommentsByDate } from './project-specific-utils';
import {
  offersByCitiesMock,
  offersByPriceDownMock,
  offersByPriceUpMock,
  offersByRatingDownMock,
  offersMock,
  offersPopularMock
} from '../mocks/mock-offers';
import { SortOptions } from '../const';

describe('Function getVisualRating', () => {
  it('should round given float from 0 to 5, than convert the result to percents, where 0 is 0% and 5 is 100% and return a string with "%"' +
    '  at the end', () => {
    expect(getVisualRating(2.5)).toBe('60%');
    expect(getVisualRating(2.4)).toBe('40%');
    expect(getVisualRating(0)).toBe('0%');
    expect(getVisualRating(5)).toBe('100%');
  });
});

describe('Function getSortedOffers', () => {
  it('should return an array as OfferDataTypes[], sorted in accordance to sort option as SortOptions', () => {
    expect(getSortedOffers(offersMock.slice(), SortOptions.Popular))
      .toEqual(offersPopularMock);
    expect(getSortedOffers(offersMock.slice(), SortOptions.PriceDown))
      .toEqual(offersByPriceDownMock);
    expect(getSortedOffers(offersMock.slice(), SortOptions.PriceUp))
      .toEqual(offersByPriceUpMock);
    expect(getSortedOffers(offersMock.slice(), SortOptions.RatingDown))
      .toEqual(offersByRatingDownMock);
  });
});

describe('Function sortCommentsByDate', () => {
  it('should sort array of comments as CommentsFrontTypes[] by date in order from old to new', () => {
    expect(sortCommentsByDate(defaultComments))
      .toEqual(sortedComments);
  });
});

describe('Function getOffersByCities', () => {
  it('should return an object as OffersByCitiesTypes', () => {
    expect(getOffersByCities(offersMock.slice()))
      .toEqual(offersByCitiesMock);
  });
});
