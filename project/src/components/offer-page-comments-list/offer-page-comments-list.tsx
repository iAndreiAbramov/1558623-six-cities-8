import React from 'react';
import { getMillisecondsFromDate } from '../../utils/common-utils';
import OfferPageComment from '../offer-page-comment/offer-page-comment';
import { OfferPageCommentsListTypes } from '../../types/offer-page-types';

function OfferPageCommentsList(props: OfferPageCommentsListTypes): JSX.Element {
  const { commentsData } = props;
  const commentsList = commentsData
    .sort((a, b) => (
      getMillisecondsFromDate(a.date) - getMillisecondsFromDate(b.date)
    ))
    .map((dataItem) => (
      <OfferPageComment
        key={ dataItem.id }
        commentData={ dataItem }
      />
    ));

  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
      <ul className="reviews__list">
        { commentsList }
      </ul>
    </>
  );
}

export default OfferPageCommentsList;
