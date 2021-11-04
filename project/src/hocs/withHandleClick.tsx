import React, { Component, JSXElementConstructor, useState } from 'react';
import { useDispatch } from 'react-redux';
import { api } from '../index';
import { APIRoute, AppRoute, IsFavoriteValue } from '../const';
import { adaptOfferToFront } from '../utils/adapters';
import browserHistory from '../services/browser-history';
import { getFavoritesDataAction } from '../store/api-actions';
import { OfferCardBookmarkTypes } from '../components/offer-card-bookmark/offer-card-bookmark';

export const withHandleClick = (Component: JSXElementConstructor<OfferCardBookmarkTypes>) => (props: OfferCardBookmarkTypes) => {
  const dispatch = useDispatch();
  const history = browserHistory;
  const { isFavorite, offerId } = props;
  const [isFavoriteStatus, setIsFavoriteStatus] = useState(isFavorite);

  const handleBookmarkClick = async (hotelId: string): Promise<void> => {
    const isFavoriteValue = isFavoriteStatus ? IsFavoriteValue.NotFavorite : IsFavoriteValue.Favorite;
    await api.post(`${ APIRoute.Favorite }/${ hotelId }/${ isFavoriteValue }/5`)
      .then(({ data }) => {
        setIsFavoriteStatus(adaptOfferToFront(data).isFavorite);
        if (history.location.pathname === AppRoute.Favorites) {
          dispatch(getFavoritesDataAction());
        }
      })
      .catch(() => {});
  };

  return (
    <Component
      isFavorite={ isFavoriteStatus }
      offerId={ offerId }
      handleBookmarkClick={ handleBookmarkClick }
    />
  )
}
