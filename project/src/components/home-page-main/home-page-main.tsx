import React from 'react';
import { Link } from 'react-router-dom';
import { HomeOffersProps } from '../../types/home-page-types';
import HomePageList from '../home-page-list/home-page-list';
import HomePageMap from '../home-page-map/home-page-map';

function HomePageMain(props: HomeOffersProps): JSX.Element {
  const { offersData } = props;

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            <li className="locations__item">
              <Link className="locations__item-link tabs__item" to="/">
                <span>Paris</span>
              </Link>
            </li>
            <li className="locations__item">
              <Link className="locations__item-link tabs__item" to="/">
                <span>Cologne</span>
              </Link>
            </li>
            <li className="locations__item">
              <Link className="locations__item-link tabs__item" to="/">
                <span>Brussels</span>
              </Link>
            </li>
            <li className="locations__item">
              <Link className="locations__item-link tabs__item tabs__item--active" to="/">
                <span>Amsterdam</span>
              </Link>
            </li>
            <li className="locations__item">
              <Link className="locations__item-link tabs__item" to="/">
                <span>Hamburg</span>
              </Link>
            </li>
            <li className="locations__item">
              <Link className="locations__item-link tabs__item" to="/">
                <span>Dusseldorf</span>
              </Link>
            </li>
          </ul>
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <HomePageList
            offersData={ offersData }
          />
          <HomePageMap />
        </div>
      </div>
    </main>
  );
}

export default HomePageMain;
