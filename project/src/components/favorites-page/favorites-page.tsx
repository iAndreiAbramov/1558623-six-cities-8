import FavoritesPageMain from '../favorites-page-main/favorites-page-main';
import FavoritesPageFooter from '../favorites-page-footer/favorites-page-footer';
import { FavoritesTypes } from '../../types/favorites-types';
import PageHeader from '../page-header/page-header';
import React from 'react';
import FavoritesPageEmpty from '../favorites-page-empty/favorites-page-empty';

function FavoritesPage(props: FavoritesTypes): JSX.Element {
  const { isEmpty } = props;
  const pageContent: JSX.Element = isEmpty ? <FavoritesPageEmpty /> : <FavoritesPageMain />;
  const wrapperClass: string = isEmpty ? 'page page--favorites-empty' : 'page';
  return (
    <div className={ wrapperClass }>
      <PageHeader />
      { pageContent }
      <FavoritesPageFooter />
    </div>
  );
}

export default FavoritesPage;
