import React, { useEffect } from 'react';
import { bindActionCreators, Dispatch } from '@reduxjs/toolkit';
import { connect, ConnectedProps } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ActionTypes } from '../../types/action-types';
import { AuthorizationStatus } from '../../const';
import {
  getCommentsDataAction,
  getNearOffersAction,
  getOfferDataAction,
  postNewCommentAction
} from '../../store/api-actions';
import { getVisualRating } from '../../utils/common-utils';
import OfferPageCommentsList from '../offer-page-comments-list/offer-page-comments-list';
import OfferPageGallery from '../offer-page-gallery/offer-page-gallery';
import OfferPageGoods from '../offer-page-goods/offer-page-goods';
import OfferPageHost from '../offer-page-host/offer-page-host';
import OfferPageMap from '../offer-page-map/offer-page-map';
import OfferPageNewComment from '../offer-page-new-comment/offers-page-new-comment';
import OfferPageNearList from '../offer-page-near-list/offer-page-near-list';
import { StateTypes } from '../../types/state-types';

const mapStateToProps = (state: StateTypes) => ({
  pageData: state.currentHotel,
  nearOffersData: state.nearOffersData,
  currentHotelComments: state.currentHotelComments,
  authorization: state.authorization,
})
const mapDispatchToProps = (dispatch: Dispatch<ActionTypes>) => bindActionCreators({
  getOfferData: getOfferDataAction,
  getCommentsData: getCommentsDataAction,
  getNearbyOffers: getNearOffersAction,
  postNewComment: postNewCommentAction,
}, dispatch);

const offerPageMainConnector = connect(mapStateToProps, mapDispatchToProps);
const OfferPageMainConnected = offerPageMainConnector(OfferPageMain);

type OfferPageTypes = ConnectedProps<typeof offerPageMainConnector>;

function OfferPageMain(props: OfferPageTypes): JSX.Element {
  const { pageData, nearOffersData, currentHotelComments, authorization, getOfferData, getCommentsData, getNearbyOffers, postNewComment } = props;
  const { isFavorite, isPremium, host, price, rating, bedrooms, maxAdults, type, images, goods, city, id: offerId } = pageData;
  const visualRating = getVisualRating(rating);
  const bookmarkButtonClass = isFavorite
    ? 'property__bookmark-button property__bookmark-button--active button'
    : 'property__bookmark-button button';
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
    if (!offerId) {
      getOfferData(id);
    }
    getCommentsData(id);
    getNearbyOffers(id);
  }, []);

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
                commentsData={ currentHotelComments }
              />
              {
                authorization === AuthorizationStatus.Auth
                && <OfferPageNewComment
                  id={ id }
                  postNewComment={ postNewComment }
                />
              }
            </section>
          </div>
        </div>
        <OfferPageMap
          cityLocation={ city.location }
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

export { OfferPageMain };
export default OfferPageMainConnected;
