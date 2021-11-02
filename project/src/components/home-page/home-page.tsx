import React from 'react';
import PageHeader from '../page-header/page-header';
import HomePageMain from '../home-page-main/home-page-main';

function HomePage(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <PageHeader />
      <HomePageMain />
    </div>
  );
}

export default HomePage;
