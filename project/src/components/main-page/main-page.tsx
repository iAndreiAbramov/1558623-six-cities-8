import MainPageMain from '../main-page-main/main-page-main';
import { MainPageProps } from '../../types/main-page-types';
import PageHeader from '../page-header/page-header';
import React from 'react';

function MainPage({ offersNumber }: MainPageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <PageHeader />
      <MainPageMain offersNumber={ offersNumber } />
    </div>
  );
}

export default MainPage;
