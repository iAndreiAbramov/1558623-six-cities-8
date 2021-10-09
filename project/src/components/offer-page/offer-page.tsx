import React from 'react';
import OfferPageMain from '../offer-page-main/offer-page-main';
import PageHeader from '../page-header/page-header';
import { OfferPageTypes } from '../../types/offer-page-types';

function OfferPage(props: OfferPageTypes): JSX.Element {
  const { authorizationStatus } = props;
  return (
    <div className="page">
      <PageHeader />
      <OfferPageMain
        authorizationStatus={ authorizationStatus }
      />
    </div>
  );
}

export default OfferPage;
