import React from 'react';
import { CommentsDataTypes } from '../../types/comments-data-types';
import OfferPageMain from '../offer-page-main/offer-page-main';
import { OfferDataTypes } from '../../types/offer-data-types';
import PageHeader from '../page-header/page-header';
import { useParams } from 'react-router-dom';

type OfferPageTypes = {
  authorizationStatus: 'AUTH' | 'NO_AUTH',
  offersData: OfferDataTypes[],
  commentsData: CommentsDataTypes[],
}

function OfferPage(props: OfferPageTypes): JSX.Element {
  const { authorizationStatus, offersData, commentsData } = props;
  const { id } = useParams() as { id: string };

  //todo Временное решение
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
