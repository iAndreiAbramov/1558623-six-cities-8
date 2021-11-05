import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { MAX_IMAGES_NUMBER } from '../../const';
import { getCurrentHotel, getNearOffersData } from '../../store/selectors';
import { getNearOffersAction, getOfferDataAction } from '../../store/api-actions';
import OfferPageGallery from '../offer-page-gallery/offer-page-gallery';
import OfferPageGoods from '../offer-page-goods/offer-page-goods';
import OfferPageHost from '../offer-page-host/offer-page-host';
import OfferPageMap from '../offer-page-map/offer-page-map';
import OfferPageNearList from '../offer-page-near-list/offer-page-near-list';
import OfferPageBookmark from '../offer-page-bookmark/offer-page-bookmark';
import OfferPageReviews from '../offer-page-reviews/offer-page-reviews';
import { getVisualRating } from '../../utils/project-specific-utils';

function OfferPageMain(): JSX.Element {
  const pageData = useSelector(getCurrentHotel);
  const nearOffersData = useSelector(getNearOffersData);
  const dispatch = useDispatch();
  const { isFavorite, isPremium, host, price, rating, bedrooms, maxAdults, type, images, goods, city, id: offerId } = pageData;
  const visualRating = getVisualRating(rating);

  const nearbyPoints = nearOffersData.map((item) => ({
    latitude: item.location.latitude,
    longitude: item.location.longitude,
    id: item.id,
  }));
  const currentPoint = {
    latitude: pageData.location.latitude,
    longitude: pageData.location.longitude,
    id: pageData.id,
  };

  const { id } = useParams() as { id: string };

  useEffect(() => {
    !offerId && dispatch(getOfferDataAction(id));
    dispatch(getNearOffersAction(id));
  }, [dispatch, id, offerId]);

  return (
    <main className="page__main page__main--property">
      <section className="property">
        { images.length > 0 && <OfferPageGallery images={ images.slice(0, MAX_IMAGES_NUMBER) } /> }
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
              <OfferPageBookmark
                isFavorite={ isFavorite }
                offerId={ offerId }
                handleBookmarkClick={ () => null }
              />
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
            <OfferPageHost
              host={ host }
            />
            <OfferPageReviews
              id={ id }
            />
          </div>
        </div>
        <OfferPageMap
          cityLocation={ city.location }
          nearbyPoints={ nearbyPoints }
          currentPoint={ currentPoint }
        />
      </section>
      {
        nearOffersData.length > 0
        &&
        <OfferPageNearList
          nearOffersData={ nearOffersData }
        />
      }
    </main>
  );
}

export default OfferPageMain;
