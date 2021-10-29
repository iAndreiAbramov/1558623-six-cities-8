import React from 'react';
import { CommentsFrontTypes } from '../../types/comments-types';
import { getVisualRating } from '../../utils/common-utils';
import { MONTHS } from '../../const';

type OfferPageCommentTypes = {
  commentData: CommentsFrontTypes,
}

function OfferPageComment(props: OfferPageCommentTypes): JSX.Element {
  const { commentData } = props;
  const { date, rating, user, comment } = commentData;
  const visualRating = getVisualRating(rating);
  const dateObject = new Date(date);
  const dateString = `${ MONTHS[dateObject.getMonth()] } ${ dateObject.getFullYear() }`;
  const dateTimeString = `${ dateObject.getFullYear() }-${ dateObject.getMonth() + 1 }-${ dateObject.getDate() }`;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={ user.avatarUrl } width="54" height="54"
            alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          { user.name }
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={ { width: visualRating } } />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          { comment }
        </p>
        <time className="reviews__time" dateTime={ dateTimeString }>{ dateString }</time>
      </div>
    </li>
  );
}

export default OfferPageComment;
