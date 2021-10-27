import React from 'react';
import OfferPageMain from '../offer-page-main/offer-page-main';
import PageHeader from '../page-header/page-header';

type OfferPageTypes = {
  authorizationStatus: 'AUTH' | 'NO_AUTH' | 'UNKNOWN',
}

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
