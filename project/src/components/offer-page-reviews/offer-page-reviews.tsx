import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AuthorizationStatus } from '../../const';
import { getAuthorizationStatus, getCurrentHotelComments } from '../../store/selectors';
import { getCommentsDataAction } from '../../store/api-actions';
import OfferPageCommentsList from '../offer-page-comments-list/offer-page-comments-list';
import OfferPageNewComment from '../offer-page-new-comment/offers-page-new-comment';

function OfferPageReviews(props: { id: string }): JSX.Element {
  const currentHotelComments = useSelector(getCurrentHotelComments);
  const authorization = useSelector(getAuthorizationStatus);
  const dispatch = useDispatch();
  const { id } = props;

  useEffect(() => {
    dispatch(getCommentsDataAction(id));
  }, [id, dispatch]);

  return (
    <section className="property__reviews reviews">
      {
        currentHotelComments.length > 0
        &&
        <OfferPageCommentsList
          commentsData={ currentHotelComments }
        />
      }
      {
        authorization === AuthorizationStatus.Auth
        &&
        <OfferPageNewComment id={ id } />
      }
    </section>
  );
}

export default OfferPageReviews;
