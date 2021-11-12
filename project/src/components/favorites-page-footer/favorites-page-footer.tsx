import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppRoute } from '../../const';
import { getActiveCity } from '../../store/selectors';
import { initActiveCityAction } from '../../store/api-actions';

function FavoritesPageFooter(): JSX.Element {
  const dispatch = useDispatch();
  const activeCityName = useSelector(getActiveCity).name;

  return (
    <footer className="footer container" data-testid="favorites-footer">
      <Link
        className="footer__logo-link"
        to={ AppRoute.Home }
        onClick={ () => dispatch(initActiveCityAction(activeCityName)) }
      >
        <img className="footer__logo" src="./img/logo.svg" alt="6 cities logo" width="64" height="33" />
      </Link>
    </footer>
  );
}

export default FavoritesPageFooter;
