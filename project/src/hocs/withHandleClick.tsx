import React, { Component, JSXElementConstructor, useState } from 'react';
import { APIRoute, AppRoute, IsFavoriteValue, NotificationMessage } from '../const';
import { api } from '../index';
import { adaptOfferToFront } from '../utils/adapters';
import browserHistory from '../services/browser-history';
import { getFavoritesDataAction } from '../store/api-actions';
import { notifyError } from '../utils/common-utils';
import { OfferCardBookmarkTypes } from '../components/offer-card-bookmark/offer-card-bookmark';
import { useDispatch } from 'react-redux';

export const withHandleClick = (Component: JSXElementConstructor<OfferCardBookmarkTypes>) => (props: OfferCardBookmarkTypes) => {
  const dispatch = useDispatch();
  const { isFavorite, offerId } = props;
  const [isFavoriteStatus, setIsFavoriteStatus] = useState(isFavorite);

  const handleBookmarkClick = async (hotelId: string): Promise<void> => {
    const isFavoriteValue = isFavoriteStatus ? IsFavoriteValue.NotFavorite : IsFavoriteValue.Favorite;
    await api.post(`${ APIRoute.Favorite }/${ hotelId }/${ isFavoriteValue }`)
      .then(({ data }) => {
        setIsFavoriteStatus(adaptOfferToFront(data).isFavorite);
        dispatch(getFavoritesDataAction());
      })
      .catch(() => {
        browserHistory.push(AppRoute.Login);
        notifyError(NotificationMessage.Unauthorized)
      });
  };

  return (
    <Component
      isFavorite={ isFavoriteStatus }
      offerId={ offerId }
      handleBookmarkClick={ handleBookmarkClick }
    />
  )
}
