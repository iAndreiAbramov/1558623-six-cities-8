import React from 'react';
import OfferPageMain from '../offer-page-main/offer-page-main';
import PageHeader from '../page-header/page-header';

function OfferPage(): JSX.Element {
  return (
    <div className="page">
      <PageHeader />
      <OfferPageMain />
    </div>
  );
}

export default OfferPage;
