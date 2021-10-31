import React from 'react';
import FavoritesPageCardConnected from '../favorites-page-card/favorites-page-card';
import { OfferDataTypes } from '../../types/offer-data-types';

type FavoritesCityTypes = {
  cityName: string,
  data: OfferDataTypes[],
}

function FavoritesPageCity(props: FavoritesCityTypes): JSX.Element {
  const { cityName, data } = props;
  const cardsList = data.map((item) => (
    <FavoritesPageCardConnected
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
