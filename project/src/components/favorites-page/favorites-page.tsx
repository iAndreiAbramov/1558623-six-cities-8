import React from 'react';
import FavoritesPageEmpty from '../favorites-page-empty/favorites-page-empty';
import FavoritesPageFooter from '../favorites-page-footer/favorites-page-footer';
import FavoritesPageMain from '../favorites-page-main/favorites-page-main';
import { OfferDataTypes } from '../../types/offer-data-types';
import PageHeader from '../page-header/page-header';

type FavoritesTypes = {
  favoritesData: OfferDataTypes[],
}

function FavoritesPage(props: FavoritesTypes): JSX.Element {
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

export default FavoritesPage;
