import React from 'react';
import FavoritesPageCard from '../favorites-page-card/favorites-page-card';
import { FavoritesCityTypes } from '../../types/favorites-types';

function FavoritesPageCity(props: FavoritesCityTypes): JSX.Element {
  const { cityName, data } = props;
  const cardsList = data.map((item) => (
    <FavoritesPageCard
      key={ item.id }
      data={ item }
    />
  ));

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          {/*todo Разобраться куда ссылка, заменить на Link*/}
          <a className="locations__item-link" href="#">
            <span>{ cityName }</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        { cardsList }
      </div>
    </li>
  );
}

export default FavoritesPageCity;
