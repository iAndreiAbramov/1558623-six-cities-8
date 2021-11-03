import React, { useState } from 'react';
import { APIRoute, AppRoute, IsFavoriteValue } from '../../const';
import { api } from '../../index';
import { adaptOfferToFront } from '../../utils/adapters';
import browserHistory from '../../services/browser-history';

type OfferCardBookmarkTypes = {
  isFavorite: boolean,
  offerId: string,
}

function OfferCardBookmark(props: OfferCardBookmarkTypes): JSX.Element {
  const { isFavorite, offerId } = props;
  const [isFavoriteStatus, setIsFavoriteStatus] = useState(isFavorite);

  const bookmarkButtonClass = isFavoriteStatus
    ? 'place-card__bookmark-button place-card__bookmark-button--active button'
    : 'place-card__bookmark-button button';

  const handleBookmarkClick = async (hotelId: string): Promise<void> => {
    const isFavoriteValue = isFavoriteStatus ? IsFavoriteValue.NotFavorite : IsFavoriteValue.Favorite;
    await api.post(`${ APIRoute.Favorite }/${ hotelId }/${ isFavoriteValue }`)
      .then(({ data }) => {
        setIsFavoriteStatus(adaptOfferToFront(data).isFavorite);
      })
      .catch(() => browserHistory.push(AppRoute.Login));
  };

  return (
    <button
      className={ bookmarkButtonClass }
      type="button"
      onClick={ () => handleBookmarkClick(offerId) }
    >
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default OfferCardBookmark;
