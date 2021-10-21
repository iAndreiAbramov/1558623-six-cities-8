import React from 'react';
import { CommentsDataTypes } from '../../types/comments-data-types';
import OfferPageMain from '../offer-page-main/offer-page-main';
import { OfferDataTypes } from '../../types/offer-data-types';
import PageHeader from '../page-header/page-header';
import { useParams } from 'react-router-dom';

type OfferPageTypes = {
  authorizationStatus: 'AUTH' | 'NO_AUTH',
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
