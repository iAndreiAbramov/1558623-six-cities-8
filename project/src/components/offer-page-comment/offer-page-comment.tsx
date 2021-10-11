import React from 'react';
import { OfferPageCommentTypes } from '../../types/offer-page-types';
import { getVisualRating } from '../../utils/common-utils';

function OfferPageComment(props: OfferPageCommentTypes): JSX.Element {
  const { commentData } = props;
  const { date, rating, user, comment } = commentData;
  const visualRating = getVisualRating(rating);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={ user.avatarUrl } width="54" height="54" alt="Reviews avatar" />
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
        {
          //todo: Привести атрибут dateTime в соответствие на реальных данных
        }
        <time className="reviews__time" dateTime="2019-04-24">{ date }</time>
      </div>
    </li>
  );
}

export default OfferPageComment;
