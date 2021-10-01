import React from 'react';
import PageHeader from '../page-header/page-header';
import MainPageMain from '../main-page-main/main-page-main';

type MainPageProps = {
  offersNumber: number;
}

function MainPage({ offersNumber }: MainPageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <PageHeader />
      <MainPageMain offersNumber={ offersNumber } />
    </div>
  );
}

export default MainPage;
