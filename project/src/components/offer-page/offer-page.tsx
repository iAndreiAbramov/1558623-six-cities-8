import React from 'react';
import { useSelector } from 'react-redux';
import { getFetchStatus } from '../../store/selectors';
import { FetchStatus } from '../../const';
import NotFoundPage from '../not-found-page/not-found-page';
import OfferPageMainConnected from '../offer-page-main/offer-page-main';
import PageHeaderConnected from '../page-header/page-header';
import SpinnerOffer from '../spinner-offer/spinner-offer';

function OfferPageConnected(): JSX.Element {
  const isFetching = useSelector(getFetchStatus);

  return (
    <div className="page">
      { isFetching === FetchStatus.InProgress && <SpinnerOffer /> }
      {
        isFetching === FetchStatus.Success &&
        <>
          <PageHeaderConnected />
          <OfferPageMainConnected />
        </>
      }
      { isFetching === FetchStatus.Error && <NotFoundPage /> }
    </div>
  );
}

export default OfferPageConnected;
