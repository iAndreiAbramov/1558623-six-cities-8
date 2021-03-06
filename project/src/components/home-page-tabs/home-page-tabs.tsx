import React from 'react';
import { Cities } from '../../const';
import HomePageTab from '../home-page-tab/home-page-tab';

function HomePageTabs(): JSX.Element {
  const tabs = Object.keys(Cities).map((cityName) => (
    <li key={ cityName } className="locations__item">
      <HomePageTab
        name={ cityName }
      />
    </li>
  ));

  return (
    <div className="tabs" data-testid="home-tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          { tabs }
        </ul>
      </section>
    </div>
  );
}

export default React.memo(HomePageTabs);
