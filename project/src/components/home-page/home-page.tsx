import HomePageMain from '../home-page-main/home-page-main';
import { MainPageProps } from '../../types/home-page-types';
import PageHeader from '../page-header/page-header';
import React from 'react';

function HomePage({ offersNumber }: MainPageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <PageHeader />
      <HomePageMain offersNumber={ offersNumber } />
    </div>
  );
}

export default HomePage;
