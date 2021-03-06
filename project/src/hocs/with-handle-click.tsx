import React, { ComponentType, JSXElementConstructor, useState } from 'react';
import { APIRoute, AppRoute, HttpStatusCode, IsFavoriteValue, NotificationMessage } from '../const';
import { adaptOfferToFront } from '../utils/adapters';
import browserHistory from '../services/browser-history';
import { OfferCardBookmarkTypes } from '../components/offer-card-bookmark/offer-card-bookmark';
import { notifyError } from '../utils/project-specific-utils';
import { createFreeApi } from '../services/api';
import { useDispatch } from 'react-redux';
import { getFavoritesDataAction } from '../store/api-actions';

const freeApi = createFreeApi();

function withHandleClick(
  Component: JSXElementConstructor<OfferCardBookmarkTypes>,
): ComponentType<OfferCardBookmarkTypes> {
  function WithHandleClick(props: OfferCardBookmarkTypes): JSX.Element {
    const history = browserHistory;
    const dispatch = useDispatch();
    const { isFavorite, offerId } = props;
    const [isFavoriteStatus, setIsFavoriteStatus] = useState(isFavorite);

    const handleBookmarkClick = async (hotelId: string): Promise<void> => {
      const isFavoriteValue = isFavoriteStatus ? IsFavoriteValue.NotFavorite : IsFavoriteValue.Favorite;
      await freeApi.post(`${ APIRoute.Favorite }/${ hotelId }/${ isFavoriteValue }`)
        .then(({ data }) => {
          setIsFavoriteStatus(adaptOfferToFront(data).isFavorite);
          if (history.location.pathname === AppRoute.Favorites) {
            dispatch(getFavoritesDataAction());
          }
        })
        .catch(({ response }) => {
          if (response?.status === HttpStatusCode.Unauthorised) {
            notifyError(NotificationMessage.Unauthorized);
            history.push(AppRoute.Login);
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
