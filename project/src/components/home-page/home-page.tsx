import React from 'react';
import HomePageMain from '../home-page-main/home-page-main';
import { HomePageProps } from '../../types/home-page-types';
import PageHeader from '../page-header/page-header';

function HomePage(props: HomePageProps): JSX.Element {
  const { offersData } = props;
  return (
    <div className="page page--gray page--main">
      <PageHeader />
      <HomePageMain
        offersData={ offersData }
      />
    </div>
  );
}

export default HomePage;
