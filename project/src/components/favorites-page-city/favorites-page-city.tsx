import React from 'react';
import { Link } from 'react-router-dom';
import FavoritesPageCard from '../favorites-page-card/favorites-page-card';
import { initActiveCityAction } from '../../store/api-actions';
import { OfferDataTypes } from '../../types/offer-data-types';
import { useDispatch } from 'react-redux';

type FavoritesCityTypes = {
  cityName: string,
  data: OfferDataTypes[],
}

function FavoritesPageCity(props: FavoritesCityTypes): JSX.Element {
  const dispatch = useDispatch();
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
          <Link className="locations__item-link" to="/" data-testid='favorites-home-link'>
            <span
              onClick={ () => dispatch(initActiveCityAction(cityName)) }
            >
              { cityName }
            </span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        { cardsList }
      </div>
    </li>
  );
}

export default FavoritesPageCity;
