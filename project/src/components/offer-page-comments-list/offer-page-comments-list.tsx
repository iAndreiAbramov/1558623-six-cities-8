import React from 'react';
import OfferPageComment from '../offer-page-comment/offer-page-comment';

function OfferPageCommentsList(): JSX.Element {
  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
      <ul className="reviews__list">
        <OfferPageComment />
      </ul>
    </>
  );
}

export default OfferPageCommentsList;
