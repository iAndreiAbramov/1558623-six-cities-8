import React from 'react';
import { FavoritesTypes } from '../../types/favorites-types';
import FavoritesPageCity from '../favorites-page-cities/favorites-page-city';
import { getOffersByCities } from '../../utils/offerSpecificUtils';

function FavoritesPageMain(props: FavoritesTypes): JSX.Element {
  const { favoritesData } = props;
  const offersByCities = getOffersByCities(favoritesData);
  const citiesList = Object.entries(offersByCities)
    .map((city) => (
      <FavoritesPageCity
        key={ city[0] }
        cityName={ city[0] }
        data={ city[1] }
      />
    ));

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
