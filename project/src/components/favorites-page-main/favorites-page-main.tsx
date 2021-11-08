import React from 'react';
import FavoritesPageCity from '../favorites-page-city/favorites-page-city';
import { getOffersByCities } from '../../utils/project-specific-utils';
import { OfferDataTypes } from '../../types/offer-data-types';

type FavoritesMainTypes = {
  favoritesData: OfferDataTypes[],
}

function FavoritesPageMain(props: FavoritesMainTypes): JSX.Element {
  const { favoritesData } = props;
  const offersByCities = getOffersByCities(favoritesData);
  const citiesList = Object.entries(offersByCities)
    .sort((a, b) =>  b[0] > a[0] ? -1 : 1)
    .map((cityData) => {
      const [cityName, data] = cityData;
      return (
        <FavoritesPageCity
          key={ cityName }
          cityName={ cityName }
          data={ data }
        />
      );
    });

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            { citiesList }
          </ul>
        </section>
      </div>
    </main>
  );
}

export default FavoritesPageMain;
