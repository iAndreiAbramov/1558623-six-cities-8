import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { getVisualRating } from '../../utils/common-utils';
import { OfferDataTypes } from '../../types/offer-data-types';

type OfferCardTypes = {
  data: OfferDataTypes,
  onActiveCardChange?: (newId: string) => void,
  articleClass: string,
  imgWrapperClass: string,
  handleBookmarkClick: (id: string, isFavoriteValue: string) => void,
}

function OfferCard(props: OfferCardTypes): JSX.Element {
  const { data, onActiveCardChange, articleClass, imgWrapperClass, handleBookmarkClick } = props;
  const { id, price, rating, title, previewImage, type, isPremium, isFavorite } = data;
  const isFavoriteValue = isFavorite ? '0' : '1';
  const visualRating = getVisualRating(rating);
  const bookmarkButtonClass = isFavorite
    ? 'place-card__bookmark-button place-card__bookmark-button--active button'
    : 'place-card__bookmark-button button';

  return (
    <article className={ `${ articleClass } place-card` }
      onMouseEnter={ () => onActiveCardChange && onActiveCardChange(id) }
      onMouseLeave={ () => onActiveCardChange && onActiveCardChange('') }
    >
      {
        isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className={ `${ imgWrapperClass } place-card__image-wrapper` }>
        <Link to={ `${ AppRoute.Offer }/${ id }` }>
          <img className="place-card__image" src={ previewImage } width="260" height="200"
            alt="Place view"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{ price }</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={ bookmarkButtonClass }
            type="button"
            onClick={ () => handleBookmarkClick(id, isFavoriteValue) }
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={ { width: visualRating } } />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={ `${ AppRoute.Offer }/${ id }` }>{ title }</Link>
        </h2>
        <p className="place-card__type">{ type }</p>
      </div>
    </article>
  );
}

export default OfferCard;
