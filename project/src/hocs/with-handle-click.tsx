import React, { ComponentType, JSXElementConstructor, useState } from 'react';
import { useDispatch } from 'react-redux';
import { api } from '../index';
import { APIRoute, AppRoute, HttpStatusCode, IsFavoriteValue, NotificationMessage } from '../const';
import { adaptOfferToFront } from '../utils/adapters';
import browserHistory from '../services/browser-history';
import { getFavoritesDataAction } from '../store/api-actions';
import { OfferCardBookmarkTypes } from '../components/offer-card-bookmark/offer-card-bookmark';
import { notifyError } from '../utils/project-specific-utils';

function withHandleClick(
  Component: JSXElementConstructor<OfferCardBookmarkTypes>,
): ComponentType<OfferCardBookmarkTypes> {
  function WithHandleClick(props: OfferCardBookmarkTypes): JSX.Element {
    const dispatch = useDispatch();
    const history = browserHistory;
    const { isFavorite, offerId } = props;
    const [isFavoriteStatus, setIsFavoriteStatus] = useState(isFavorite);

    const handleBookmarkClick = async (hotelId: string): Promise<void> => {
      const isFavoriteValue = isFavoriteStatus ? IsFavoriteValue.NotFavorite : IsFavoriteValue.Favorite;
      await api.post(`${ APIRoute.Favorite }/${ hotelId }/${ isFavoriteValue }`)
        .then(({ data }) => {
          setIsFavoriteStatus(adaptOfferToFront(data).isFavorite);
          if (history.location.pathname === AppRoute.Favorites) {
            dispatch(getFavoritesDataAction());
          }
        })
        .catch(({ response }) => {
          if (response?.status === HttpStatusCode.Unauthorised) {
            notifyError(NotificationMessage.Unauthorized);
            browserHistory.push(AppRoute.Login);
          } else {
            notifyError(NotificationMessage.ConnectionError);
          }
        });
    };

    return (
      <Component
        isFavorite={ isFavoriteStatus }
        offerId={ offerId }
        handleBookmarkClick={ handleBookmarkClick }
      />
    );
  }

  return WithHandleClick;
}

export default withHandleClick;
