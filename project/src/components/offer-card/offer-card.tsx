import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppRoute } from '../../const';
import { getOfferDataAction } from '../../store/api-actions';
import OfferCardBookmark from '../offer-card-bookmark/offer-card-bookmark';
import { OfferDataTypes } from '../../types/offer-data-types';
import { getVisualRating } from '../../utils/project-specific-utils';
import withHandleClick from '../../hocs/with-handle-click';

const OfferCardBookmarkWrapped = withHandleClick(OfferCardBookmark);

type OfferCardTypes = {
  data: OfferDataTypes,
  onActiveCardChange?: (newId: string) => void,
  articleClass: string,
  imgWrapperClass: string,
};

function OfferCard(props: OfferCardTypes): JSX.Element {
  const dispatch = useDispatch();
  const { data: offerData, onActiveCardChange, articleClass, imgWrapperClass } = props;
  const { id, price, rating, title, previewImage, type, isPremium, isFavorite } = offerData;

  const visualRating = getVisualRating(rating);

  return (
    <article
      data-testid='offer-card'
      className={ `${ articleClass } place-card` }
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
          <OfferCardBookmarkWrapped
            isFavorite={ isFavorite }
            offerId={ id }
            handleBookmarkClick={ () => null }
          />
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

export default OfferCard;
