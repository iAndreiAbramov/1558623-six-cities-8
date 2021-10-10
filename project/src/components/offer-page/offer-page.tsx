import React from 'react';
import OfferPageMain from '../offer-page-main/offer-page-main';
import PageHeader from '../page-header/page-header';
import { OfferDataTypes } from '../../types/offer-data-types';
import { OfferPageTypes } from '../../types/offer-page-types';
import { useParams } from 'react-router-dom';

function OfferPage(props: OfferPageTypes): JSX.Element {
  const { authorizationStatus, offersData, commentsData } = props;
  const { id } = useParams() as { id: string };
  const nearOffersData = offersData.slice(0, 3);
  const pageData = offersData.find((item) => item.id === id) as OfferDataTypes;

  return (
    <div className="page">
      <PageHeader />
      <OfferPageMain
        authorizationStatus={ authorizationStatus }
        pageData={ pageData }
        commentsData={ commentsData }
        nearOffersData={ nearOffersData }
      />
    </div>
  );
}

export default OfferPage;
