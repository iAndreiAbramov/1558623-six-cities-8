import React from 'react';
import MainPageHeader from '../main-page-header/main-page-header';
import MainPageMain from '../main-page-main/main-page-main';

function MainPage(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <MainPageHeader />
      <MainPageMain />
    </div>
  );
}

export default MainPage;
