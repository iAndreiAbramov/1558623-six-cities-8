import React from 'react';
import { getOffersData } from '../../mocks/offers';
import OfferPageNearCard from '../offer-page-near-card/offer-page-near-card';

const NEAR_OFFERS_NUMBER = 3;
const nearOffersData = getOffersData(NEAR_OFFERS_NUMBER);

function OfferPageNearList() {
  const nearCards = nearOffersData.map((cardItem) => {
    const { id } = cardItem;
    return (
      <OfferPageNearCard
        key={ id }
        offerData={ cardItem }
      />
    );
  });

  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          { nearCards }
        </div>
      </section>
    </div>
  );
}

export default OfferPageNearList;
