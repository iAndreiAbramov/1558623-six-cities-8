import React from 'react';
import OfferPageNearCard from '../offer-page-near-card/offer-page-near-card';
import { OfferPageNearListTypes } from '../../types/offer-page-types';

function OfferPageNearList(props: OfferPageNearListTypes): JSX.Element {
  const { nearOffersData } = props;
  const nearCards = nearOffersData.map((cardItem) => (
    <OfferPageNearCard
      key={ cardItem.id }
      pageData={ cardItem }
    />
  ));

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
