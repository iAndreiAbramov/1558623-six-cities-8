import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute, MAX_RATING, PERCENTS_CAP } from '../../const';
import { OfferCardTypes } from '../../types/offer-card-types';

function OfferCard(props: OfferCardTypes): JSX.Element {
  const { data } = props;
  const { id, price, rating, title, previewImage, type } = data;
  const visualRating = rating * PERCENTS_CAP / MAX_RATING;
  return (
    <article className="cities__place-card place-card">
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={ `${ AppRoute.Offer }/${ id }` }>
          <img className="place-card__image" src={ previewImage } width="260" height="200"
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{ price }</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={ { width:  visualRating } } />
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
