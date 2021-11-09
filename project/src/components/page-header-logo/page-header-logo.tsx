import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useDispatch, useSelector } from 'react-redux';
import { getActiveCity } from '../../store/selectors';
import { initActiveCityAction } from '../../store/api-actions';

function PageHeaderLogo(): JSX.Element {
  const dispatch = useDispatch();
  const activeCityName = useSelector(getActiveCity).name;
  return (
    <div className="header__left">
      <Link
        to={ AppRoute.Home }
        className="header__logo-link header__logo-link--active"
        onClick={ () => dispatch(initActiveCityAction(activeCityName)) }
        data-testid="header-logo"
      >
        <img className="header__logo" src="./img/logo.svg" alt="6 cities logo" width="81" height="41"/>
      </Link>
    </div>
  );
}

export default PageHeaderLogo;
