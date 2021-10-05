import React from 'react';
import HomePageMain from '../home-page-main/home-page-main';
import { HomePageProps } from '../../types/home-page-types';
import PageHeader from '../page-header/page-header';

function HomePage({ offersNumber }: HomePageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <PageHeader />
      <HomePageMain offersNumber={ offersNumber } />
    </div>
  );
}

export default HomePage;
