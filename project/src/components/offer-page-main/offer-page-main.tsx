import React from 'react';
import { getVisualRating } from '../../utils/common-utils';
import OfferPageCommentsList from '../offer-page-comments-list/offer-page-comments-list';
import OfferPageNewComment from '../offers-page-new-comment/offers-page-new-comment';
import { OfferPageMainTypes } from '../../types/offer-page-types';
import OfferPageGallery from '../offer-page-gallery/offer-page-gallery';
import OfferPageGoods from '../offer-page-goods/offer-page-goods';
import OfferPageHost from '../offer-page-host/offer-page-host';

function OfferPageMain(props: OfferPageMainTypes): JSX.Element {
  const { authorizationStatus, pageData } = props;
  const { isFavorite, isPremium, host, price, rating, bedrooms, maxAdults, type, images, goods } = pageData;
  const visualRating = getVisualRating(rating);
  const bookmarkButtonClass = isFavorite
    ? 'property__bookmark-button property__bookmark-button--active button'
    : 'property__bookmark-button button';

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
              <OfferPageCommentsList />
              { authorizationStatus === 'AUTH' ? <OfferPageNewComment /> : null }
            </section>
          </div>
        </div>
        <section className="property__map map" />
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            <article className="near-places__card place-card">
              <div className="near-places__image-wrapper place-card__image-wrapper">
                <a href="#">
                  <img className="place-card__image" src="./img/room.jpg" width="260" height="200" alt="Place image" />
                </a>
              </div>
              <div className="place-card__info">
                <div className="place-card__price-wrapper">
                  <div className="place-card__price">
                    <b className="place-card__price-value">&euro;80</b>
                    <span className="place-card__price-text">&#47;&nbsp;night</span>
                  </div>
                  <button className="place-card__bookmark-button place-card__bookmark-button--active button"
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
                    <span style={ { width: '80%' } } />
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <h2 className="place-card__name">
                  <a href="#">Wood and stone place</a>
                </h2>
                <p className="place-card__type">Private room</p>
              </div>
            </article>

            <article className="near-places__card place-card">
              <div className="near-places__image-wrapper place-card__image-wrapper">
                <a href="#">
                  <img className="place-card__image" src="./img/apartment-02.jpg" width="260" height="200"
                    alt="Place image"
                  />
                </a>
              </div>
              <div className="place-card__info">
                <div className="place-card__price-wrapper">
                  <div className="place-card__price">
                    <b className="place-card__price-value">&euro;132</b>
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
                    <span style={ { width: '80%' } } />
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <h2 className="place-card__name">
                  <a href="#">Canal View Prinsengracht</a>
                </h2>
                <p className="place-card__type">Apartment</p>
              </div>
            </article>

            <article className="near-places__card place-card">
              <div className="near-places__image-wrapper place-card__image-wrapper">
                <a href="#">
                  <img className="place-card__image" src="img/apartment-03.jpg" width="260" height="200"
                    alt="Place image"
                  />
                </a>
              </div>
              <div className="place-card__info">
                <div className="place-card__price-wrapper">
                  <div className="place-card__price">
                    <b className="place-card__price-value">&euro;180</b>
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
                    <span style={ { width: '100%' } } />
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <h2 className="place-card__name">
                  <a href="#">Nice, cozy, warm big bed apartment</a>
                </h2>
                <p className="place-card__type">Apartment</p>
              </div>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}

export default OfferPageMain;
