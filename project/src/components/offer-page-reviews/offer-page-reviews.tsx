import React from 'react';
import { useSelector } from 'react-redux';
import { AuthorizationStatus } from '../../const';
import { getAuthorizationStatus, getCurrentHotelComments } from '../../store/selectors';
import OfferPageCommentsList from '../offer-page-comments-list/offer-page-comments-list';
import OfferPageNewComment from '../offer-page-new-comment/offers-page-new-comment';

function OfferPageReviews(props: { id: string }):JSX.Element {
  const currentHotelComments = useSelector(getCurrentHotelComments);
  const authorization = useSelector(getAuthorizationStatus);
  const { id } = props;

  return (
    <section className="property__reviews reviews">
      <OfferPageCommentsList
        commentsData={ currentHotelComments }
      />
      {
        authorization === AuthorizationStatus.Auth
        &&
        <OfferPageNewComment id={ id } />
      }
    </section>
  );
}

export default OfferPageReviews;
