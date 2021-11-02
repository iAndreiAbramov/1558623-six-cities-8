import React from 'react';
import { Link } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import { bindActionCreators, Dispatch } from '@reduxjs/toolkit';
import { AppRoute } from '../../const';
import { getCurrentUserData } from '../../store/selectors';
import { getEmail } from '../../services/email';
import { getFavoritesDataAction, requestLogoutAction } from '../../store/api-actions';
import { RootStateTypes } from '../../store/reducers/root-reducer';

const mapStateToProps = (state: RootStateTypes) => ({
  userEmail: getCurrentUserData(state).email,
});
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  handleLogoutClick: requestLogoutAction,
  handleFavoritesLinkClick: getFavoritesDataAction,
}, dispatch);

const PageHeaderUserConnector = connect(mapStateToProps, mapDispatchToProps);
const PageHeaderUserConnected = PageHeaderUserConnector(PageHeaderUser);

type PageHeaderUserTypes = ConnectedProps<typeof PageHeaderUserConnector>

function PageHeaderUser(props: PageHeaderUserTypes): JSX.Element {
  const { userEmail, handleLogoutClick, handleFavoritesLinkClick } = props;
  const email = userEmail ? userEmail : getEmail();

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link
            className="header__nav-link header__nav-link--profile"
            to={ AppRoute.Favorites }
            onClick={ handleFavoritesLinkClick }
          >
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <span className="header__user-name user__name">{ email }</span>
          </Link>
        </li>
        <li
          className="header__nav-item"
          onClick={ handleLogoutClick }
        >
          <Link to="/" className="header__nav-link">
            <span className="header__signout">Sign out</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export { PageHeaderUser };
export default PageHeaderUserConnected;
