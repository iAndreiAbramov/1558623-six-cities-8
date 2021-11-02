import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppRoute } from '../../const';
import { getCurrentUserData } from '../../store/selectors';
import { getEmail } from '../../services/email';
import { getFavoritesDataAction, requestLogoutAction } from '../../store/api-actions';

function PageHeaderUserConnected(): JSX.Element {
  const userEmail = useSelector(getCurrentUserData).email;
  const dispatch = useDispatch();
  const email = userEmail ? userEmail : getEmail();

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link
            className="header__nav-link header__nav-link--profile"
            to={ AppRoute.Favorites }
            onClick={ () => dispatch(getFavoritesDataAction()) }
          >
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <span className="header__user-name user__name">{ email }</span>
          </Link>
        </li>
        <li
          className="header__nav-item"
          onClick={ () => dispatch(requestLogoutAction()) }
        >
          <Link to="/" className="header__nav-link">
            <span className="header__signout">Sign out</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default PageHeaderUserConnected;
