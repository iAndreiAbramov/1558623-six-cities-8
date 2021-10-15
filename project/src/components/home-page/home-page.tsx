import React from 'react';
import HomePageMain from '../home-page-main/home-page-main';
import PageHeader from '../page-header/page-header';
import { OfferDataTypes } from '../../types/offer-data-types';

type HomePageTypes = {
  offersData: OfferDataTypes[];
}

function HomePage(props: HomePageTypes): JSX.Element {
  const { offersData } = props;

  return (
    <div className="page page--gray page--main">
      <PageHeader />
      <HomePageMain
        offersData={ offersData }
      />
    </div>
  );
}

export default HomePage;
