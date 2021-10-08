import React from 'react';
import OfferCard from '../offer-card/offer-card';
import { HomeOffersProps } from '../../types/home-page-types';

function HomePageList(props: HomeOffersProps): JSX.Element {
  const { offersData } = props;
  const offerCards = offersData.map((cardItem) => {
    const { id } = cardItem;
    return (
      <OfferCard
        key={ id }
        data={ cardItem }
      />
    );
  });

  return (
    <div className="cities__places-list places__list tabs__content">
      { offerCards }
    </div>
  );
}

export default HomePageList;
