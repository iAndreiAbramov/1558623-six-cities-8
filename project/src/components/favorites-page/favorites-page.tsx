import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import FavoritesPageEmpty from '../favorites-page-empty/favorites-page-empty';
import FavoritesPageFooter from '../favorites-page-footer/favorites-page-footer';
import FavoritesPageMain from '../favorites-page-main/favorites-page-main';
import PageHeaderConnected from '../page-header/page-header';
import { StateTypes } from '../../types/state-types';
import { FetchStatus } from '../../const';
import SpinnerOffer from '../spinner-offer/spinner-offer';

const mapStateToProps = (state: StateTypes) => ({
  favoritesData: state.favoritesData,
  fetchStatus: state.fetchStatus,
});

const favoritesPageConnector = connect(mapStateToProps);
const FavoritesPageConnected = favoritesPageConnector(FavoritesPage);

type FavoritesPageTypes = ConnectedProps<typeof favoritesPageConnector>

function FavoritesPage(props: FavoritesPageTypes): JSX.Element {
  const { favoritesData, fetchStatus } = props;
  const isEmpty = favoritesData.length === 0;
  const wrapperClass: string = isEmpty ? 'page page--favorites-empty' : 'page';
  const pageContent: JSX.Element = isEmpty
    ? <FavoritesPageEmpty />
    : <FavoritesPageMain favoritesData={ favoritesData } />;

  return (
    <div className={ wrapperClass }>
      { fetchStatus === FetchStatus.InProgress && <SpinnerOffer /> }
      {
        fetchStatus === FetchStatus.Success &&
        <>
          <PageHeaderConnected />
          { pageContent }
          <FavoritesPageFooter />
        </>
      }
    </div>
  );
}

export { FavoritesPage };
export default FavoritesPageConnected;
