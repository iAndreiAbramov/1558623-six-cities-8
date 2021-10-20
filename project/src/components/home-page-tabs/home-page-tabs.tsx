import React from 'react';
import { Cities } from '../../const';
import HomePageTabConnected from '../home-page-tab/home-page-tab';

function HomePageTabs(): JSX.Element {
  const tabs = Cities.map((cityName) => (
    <li key={ cityName } className="locations__item">
      <HomePageTabConnected
        name={ cityName }
      />
    </li>
  ));

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          { tabs }
        </ul>
      </section>
    </div>
  );
}

export default HomePageTabs;
