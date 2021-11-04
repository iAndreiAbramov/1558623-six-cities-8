import React from 'react';
import withHandleClick from '../../hocs/withHandleClick';

export type OfferCardBookmarkTypes = {
  isFavorite: boolean,
  offerId: string,
  handleBookmarkClick: ((offerId: string) => Promise<void>) | (() => null);
}

function OfferCardBookmark(props: OfferCardBookmarkTypes): JSX.Element {
  const { isFavorite, offerId, handleBookmarkClick } = props;

  const bookmarkButtonClass = isFavorite
    ? 'place-card__bookmark-button place-card__bookmark-button--active button'
    : 'place-card__bookmark-button button';

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

export default withHandleClick(OfferCardBookmark);
