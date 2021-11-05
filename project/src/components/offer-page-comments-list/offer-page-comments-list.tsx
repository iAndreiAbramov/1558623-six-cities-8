import React from 'react';
import { CommentsFrontTypes } from '../../types/comments-types';
import OfferPageComment from '../offer-page-comment/offer-page-comment';
import { sortCommentsByDate } from '../../utils/project-specific-utils';

export type OfferPageCommentsListTypes = {
  commentsData: CommentsFrontTypes[],
}

function OfferPageCommentsList(props: OfferPageCommentsListTypes): JSX.Element {
  const { commentsData } = props;
  const commentsList = sortCommentsByDate(commentsData)
    .map((dataItem) => (
      <OfferPageComment
        key={ dataItem.id }
        commentData={ dataItem }
      />
    ));

  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{ commentsList.length }</span>
      </h2>
      <ul className="reviews__list">
        { commentsList }
      </ul>
    </>
  );
}

export default OfferPageCommentsList;
