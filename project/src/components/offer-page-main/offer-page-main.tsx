import React from 'react';
import { getCommentsData } from '../../mocks/comments';
import { getVisualRating } from '../../utils/common-utils';
import { OfferDataTypes } from '../../types/offer-data-types';
import OfferPageCommentsList from '../offer-page-comments-list/offer-page-comments-list';
import OfferPageGallery from '../offer-page-gallery/offer-page-gallery';
import OfferPageGoods from '../offer-page-goods/offer-page-goods';
import OfferPageHost from '../offer-page-host/offer-page-host';
import OfferPageNewComment from '../offer-page-new-comment/offers-page-new-comment';
import OfferPageNearList from '../offer-page-near-list/offer-page-near-list';
import OfferPageMap from '../offer-page-map/offer-page-map';
import { offersData } from '../../store/reducer';
import { useParams } from 'react-router-dom';

type OfferPageMainTypes = {
  authorizationStatus: 'AUTH' | 'NO_AUTH',
}

const nearOffersData = offersData.slice(0, 3);
const commentsData = getCommentsData();

function OfferPageMain(props: OfferPageMainTypes): JSX.Element {
  const { authorizationStatus } = props;
  const { id } = useParams() as { id: string };
  const pageData = offersData.find((item) => item.id === id) as OfferDataTypes;
  const { isFavorite, isPremium, host, price, rating, bedrooms, maxAdults, type, images, goods, city } = pageData;
  const visualRating = getVisualRating(rating);
  const bookmarkButtonClass = isFavorite
    ? 'property__bookmark-button property__bookmark-button--active button'
    : 'property__bookmark-button button';
  const nearbyPoints = nearOffersData.map((item) => ({
    latitude: item.location.latitude,
    longitude: item.location.longitude,
    offerId: item.id,
  }));
  const currentPoint = {
    latitude: pageData.location.latitude,
    longitude: pageData.location.longitude,
    offerId: pageData.id,
  };

  return (
    <main className="page__main page__main--property">
      <section className="property">
        { images.length > 0 && <OfferPageGallery images={ images } /> }
        <div className="property__container container">
          <div className="property__wrapper">
            {
              isPremium &&
              <div className="property__mark">
                <span>Premium</span>
              </div>
            }
            <div className="property__name-wrapper">
              <h1 className="property__name">
                Beautiful &amp; luxurious studio at great location
              </h1>
              <button className={ bookmarkButtonClass } type="button">
                <svg className="property__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark" />
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={ { width: visualRating } } />
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{ rating }</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                { type }
              </li>
              <li className="property__feature property__feature--bedrooms">
                { bedrooms } Bedrooms
              </li>
              <li className="property__feature property__feature--adults">
                Max { maxAdults } adults
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro;{ price }</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            { goods.length > 0 && <OfferPageGoods goods={ goods } /> }
            <OfferPageHost host={ host } />
            <section className="property__reviews reviews">
              <OfferPageCommentsList
                commentsData={ commentsData }
              />
              { authorizationStatus === 'AUTH' ? <OfferPageNewComment /> : null }
            </section>
          </div>
        </div>
        <OfferPageMap
          city={ city }
          nearbyPoints={ nearbyPoints }
          currentPoint={ currentPoint }
        />
      </section>
      <OfferPageNearList
        nearOffersData={ nearOffersData }
      />
    </main>
  );
}

export default OfferPageMain;
