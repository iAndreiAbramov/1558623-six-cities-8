import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';
import React from 'react';

function PageHeaderLogo(): JSX.Element {
  return (
    <div className="header__left">
      <Link className="header__logo-link header__logo-link--active" to={ AppRoute.Home }>
        <img className="header__logo" src="./img/logo.svg" alt="6 cities logo" width="81" height="41" />
      </Link>
    </div>
  );
}

export default PageHeaderLogo;
