import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { FetchStatus } from '../../const';
import NotFoundPage from '../not-found-page/not-found-page';
import OfferPageMain from '../offer-page-main/offer-page-main';
import PageHeader from '../page-header/page-header';
import SpinnerOffer from '../spinner-offer/spinner-offer';
import { RootStateTypes } from '../../store/reducers/root-reducer';
import { getFetchStatus } from '../../store/selectors';

const mapStateToProps = (state: RootStateTypes) => ({
  isFetching: getFetchStatus(state),
});

const offerPageConnector = connect(mapStateToProps);
const OfferPageConnected = offerPageConnector(OfferPage);

type OfferPageTypes = ConnectedProps<typeof offerPageConnector>;

function OfferPage(props: OfferPageTypes): JSX.Element {
  const { isFetching } = props;

  return (
    <div className="page">
      { isFetching === FetchStatus.InProgress && <SpinnerOffer /> }
      {
        isFetching === FetchStatus.Success &&
        <>
          <PageHeader />
          <OfferPageMain />
        </>
      }
      { isFetching === FetchStatus.Error && <NotFoundPage /> }
    </div>
  );
}

export { OfferPage };
export default OfferPageConnected;
