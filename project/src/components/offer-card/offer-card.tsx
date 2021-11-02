import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { adaptOfferToFront } from '../../utils/adapters';
import { api } from '../../index';
import { APIRoute, AppRoute, IsFavoriteValue } from '../../const';
import browserHistory from '../../services/browser-history';
import { getVisualRating } from '../../utils/common-utils';
import { getOfferDataAction } from '../../store/api-actions';
import { OfferDataTypes } from '../../types/offer-data-types';

type OfferCardTypes = {
  data: OfferDataTypes,
  onActiveCardChange?: (newId: string) => void,
  articleClass: string,
  imgWrapperClass: string,
};

function OfferCardConnected(props: OfferCardTypes): JSX.Element {
  const { data: offerData, onActiveCardChange, articleClass, imgWrapperClass } = props;
  const { id, price, rating, title, previewImage, type, isPremium, isFavorite } = offerData;

  const dispatch = useDispatch();

  const visualRating = getVisualRating(rating);

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
        <Link
          to={ `${ AppRoute.Offer }/${ id }` }
          onClick={ () => dispatch(getOfferDataAction(id)) }
        >
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
            onClick={ () => handleBookmarkClick(id) }
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

export default OfferCardConnected;
