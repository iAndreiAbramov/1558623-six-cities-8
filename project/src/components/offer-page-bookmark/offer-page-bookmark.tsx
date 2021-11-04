import React from 'react';
import { withHandleClick } from '../../hocs/withHandleClick';

type OfferPageBookmarkTypes = {
  isFavorite: boolean,
  offerId: string,
  handleBookmarkClick: ((offerId: string) => Promise<void>) | (() => null);
}

function OfferPageBookmark(props: OfferPageBookmarkTypes):JSX.Element {
  const { isFavorite, offerId, handleBookmarkClick } = props;

  const bookmarkButtonClass = isFavorite
    ? 'property__bookmark-button property__bookmark-button--active button'
    : 'property__bookmark-button button';

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

export default withHandleClick(OfferPageBookmark);
