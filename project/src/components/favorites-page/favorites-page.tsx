import React from 'react';
import { useSelector } from 'react-redux';
import { getFavoritesData, getFetchStatus } from '../../store/selectors';
import FavoritesPageEmpty from '../favorites-page-empty/favorites-page-empty';
import FavoritesPageFooter from '../favorites-page-footer/favorites-page-footer';
import FavoritesPageMain from '../favorites-page-main/favorites-page-main';
import { FetchStatus } from '../../const';
import PageHeaderConnected from '../page-header/page-header';
import SpinnerOffer from '../spinner-offer/spinner-offer';

function FavoritesPageConnected(): JSX.Element {
  const favoritesData = useSelector(getFavoritesData);
  const fetchStatus = useSelector(getFetchStatus);
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

export default FavoritesPageConnected;
