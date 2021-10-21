import React from 'react';
import HomePageMainConnected from '../home-page-main/home-page-main';
import PageHeader from '../page-header/page-header';

function HomePage(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <PageHeader />
      <HomePageMainConnected />
    </div>
  );
}

export default HomePage;
