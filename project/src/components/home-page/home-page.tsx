import React from 'react';
import HomePageMain from '../home-page-main/home-page-main';
import PageHeader from '../page-header/page-header';

function HomePage(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <PageHeader />
      <HomePageMain />
    </div>
  );
}

export default HomePage;
