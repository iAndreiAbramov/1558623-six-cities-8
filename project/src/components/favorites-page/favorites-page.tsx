import React from 'react';
import FavoritesPageEmpty from '../favorites-page-empty/favorites-page-empty';
import FavoritesPageFooter from '../favorites-page-footer/favorites-page-footer';
import FavoritesPageMain from '../favorites-page-main/favorites-page-main';
import PageHeader from '../page-header/page-header';
import { StateTypes } from '../../types/state-types';
import { connect } from 'react-redux';
import { OfferDataTypes } from '../../types/offer-data-types';

type FavoritesPageTypes = {
  favoritesData: OfferDataTypes[],
}

const mapStateToProps = (state: StateTypes) => ({
  favoritesData: state.offersData.filter((item) => item.isFavorite)
});

const FavoritesPageConnected = connect(mapStateToProps)(FavoritesPage);

function FavoritesPage(props: FavoritesPageTypes): JSX.Element {
  const { favoritesData } = props;
  const isEmpty = favoritesData.length === 0;
  const wrapperClass: string = isEmpty ? 'page page--favorites-empty' : 'page';
  const pageContent: JSX.Element = isEmpty
    ? <FavoritesPageEmpty />
    : <FavoritesPageMain favoritesData={ favoritesData } />;

  return (
    <div className={ wrapperClass }>
      <PageHeader />
      { pageContent }
      <FavoritesPageFooter />
    </div>
  );
}

export { FavoritesPage };
export default FavoritesPageConnected;
