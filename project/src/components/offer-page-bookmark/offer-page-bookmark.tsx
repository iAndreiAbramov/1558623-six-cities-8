import React, { useState } from 'react';
import { APIRoute, AppRoute, IsFavoriteValue } from '../../const';
import { api } from '../../index';
import { adaptOfferToFront } from '../../utils/adapters';
import browserHistory from '../../services/browser-history';

type OfferPageBookmarkTypes = {
  isFavorite: boolean,
  offerId: string,
}

function OfferPageBookmark(props: OfferPageBookmarkTypes):JSX.Element {
  const { isFavorite, offerId } = props;
  const [isFavoriteStatus, setIsFavoriteStatus] = useState(isFavorite);

  const bookmarkButtonClass = isFavoriteStatus
    ? 'property__bookmark-button property__bookmark-button--active button'
    : 'property__bookmark-button button';

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
      <svg className="property__bookmark-icon" width="31" height="33">
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default OfferPageBookmark;
