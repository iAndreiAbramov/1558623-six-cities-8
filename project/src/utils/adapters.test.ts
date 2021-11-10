import { adaptCommentsToFront, adaptOffersToFront, adaptOfferToFront, adaptUserDataToFront } from './adapters';
import { defaultBackComments, defaultComments } from '../mocks/mock-comments';
import { offerBackFirst, offerBackSecond, offerFirst, offerSecond } from '../mocks/mock-offers';
import { userBack, userFront } from '../mocks/mock-user-data';

describe('Function adaptOfferToFront', () => {
  it('should return a data structure as OfferDataTypes', () => {
    expect(adaptOfferToFront(offerBackFirst))
      .toEqual(offerFirst);
    expect(adaptOfferToFront(offerBackSecond))
      .toEqual(offerSecond);
  });
});

describe('Function adaptOffersToFront', () => {
  it('should return a data structure as OfferDataTypes[]', () => {
    expect(adaptOffersToFront([offerBackFirst, offerBackSecond]))
      .toEqual([offerFirst, offerSecond]);
  });
});

describe('Function adaptUserDataToFront', () => {
  it('should return data structure as FrontUserDataTypes', () => {
    expect(adaptUserDataToFront(userBack))
      .toEqual(userFront);
  });
});

describe('Function adaptCommentsToFront', () => {
  it('should return data structure as CommentsFrontTypes[]', () => {
    expect(adaptCommentsToFront(defaultBackComments))
      .toEqual(defaultComments);
  });
});
