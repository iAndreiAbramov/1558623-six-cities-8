import React from 'react';
import { CommentsDataTypes } from '../../types/comments-data-types';
import { getMillisecondsFromDate } from '../../utils/common-utils';
import OfferPageComment from '../offer-page-comment/offer-page-comment';

export type OfferPageCommentsListTypes = {
  commentsData: CommentsDataTypes[],
}

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
