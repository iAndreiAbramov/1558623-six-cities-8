import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { adaptOfferToFront } from '../../utils/adapters';
import { api } from '../../index';
import { APIRoute, AppRoute, IsFavoriteValue, MAX_RATING, PERCENTS_CAP } from '../../const';
import { getFavoritesDataAction, getOfferDataAction } from '../../store/api-actions';
import { OfferDataTypes } from '../../types/offer-data-types';

type FavoritesCardTypes = {
  data: OfferDataTypes,
};

function FavoritesPageCard(props: FavoritesCardTypes): JSX.Element {
  const dispatch = useDispatch();
  const { data: offerData } = props;
  const { price, rating, id, type, title, previewImage, isFavorite, isPremium } = offerData;
  const visualRating = `${ rating * PERCENTS_CAP / MAX_RATING }%`;

  const [isFavoriteStatus, setIsFavoriteStatus] = useState(isFavorite);

  const bookmarkButtonClass = isFavoriteStatus
    ? 'place-card__bookmark-button place-card__bookmark-button--active button'
    : 'place-card__bookmark-button button';

  const handleBookmarkClick = async (hotelId: string): Promise<void> => {
    const isFavoriteValue = isFavoriteStatus ? IsFavoriteValue.NotFavorite : IsFavoriteValue.Favorite;
    await api.post(`${ APIRoute.Favorite }/${ hotelId }/${ isFavoriteValue }`)
      .then(({ data }) => {
        setIsFavoriteStatus(adaptOfferToFront(data).isFavorite);
        dispatch(getFavoritesDataAction());
      });
  };

  return (
    <article className="favorites__card place-card">
      {
        isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link
          to={ `${ AppRoute.Offer }/${ id }` }
          onClick={ () => dispatch(getOfferDataAction(id)) }
        >
          <img className="place-card__image" src={ previewImage } width="150" height="110"
            alt="Place view"
          />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{ price }</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={ bookmarkButtonClass }
            type="button"
            onClick={ () => handleBookmarkClick(id) }
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
          <Link
            to={ `${ AppRoute.Offer }/${ id }` }
            onClick={ () => dispatch(getOfferDataAction(id)) }
          >
            { title }
          </Link>
        </h2>
        <p className="place-card__type">{ type }</p>
      </div>
    </article>
  );
}

export default FavoritesPageCard;
