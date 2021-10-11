import React from 'react';
import { getVisualRating } from '../../utils/common-utils';
import { Link } from 'react-router-dom';
import { OfferPageNearCardTypes } from '../../types/offer-page-types';

function OfferPageNearCard(props: OfferPageNearCardTypes): JSX.Element {
  const { pageData } = props;
  const { price, rating, isFavorite, isPremium, previewImage, type, title, id } = pageData;
  const visualRating = getVisualRating(rating);
  const bookmarkClass = isFavorite
    ? 'place-card__bookmark-button place-card__bookmark-button--active button'
    : 'place-card__bookmark-button button';

  return (
    <article className="near-places__card place-card">
      {
        isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <Link to={ `/offer/${ id }` }>
          <img className="place-card__image" src={ previewImage } width="260" height="200" alt="Place view" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{ price }</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={ bookmarkClass }
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={ { width: visualRating } } />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={ `/offer/${ id }` }>{ title }</Link>
        </h2>
        <p className="place-card__type">{ type }</p>
      </div>
    </article>
  );
}

export default OfferPageNearCard;
