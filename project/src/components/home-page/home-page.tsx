import React from 'react';
import PageHeaderConnected from '../page-header/page-header';
import HomePageMainConnected from '../home-page-main/home-page-main';

function HomePage(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <PageHeaderConnected />
      <HomePageMainConnected />
    </div>
  );
}

export default HomePage;
