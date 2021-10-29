import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Dispatch, bindActionCreators } from '@reduxjs/toolkit';
import { ActionTypes } from '../../types/action-types';
import { requestLogoutAction } from '../../store/api-actions';
import { StateTypes } from '../../types/state-types';
import { connect, ConnectedProps } from 'react-redux';
import { getEmail } from '../../services/email';

const mapStateToProps = (state: StateTypes) => ({
  userEmail: state.currentUser.email,
});
const mapDispatchToProps = (dispatch: Dispatch<ActionTypes>) => bindActionCreators({
  handleLogoutClick: requestLogoutAction,
}, dispatch);

const PageHeaderUserConnector = connect(mapStateToProps, mapDispatchToProps);
const PageHeaderUserConnected = PageHeaderUserConnector(PageHeaderUser);

type PageHeaderUserTypes = ConnectedProps<typeof PageHeaderUserConnector>

function PageHeaderUser(props: PageHeaderUserTypes): JSX.Element {
  const { userEmail, handleLogoutClick } = props;
  const email = userEmail ? userEmail : getEmail();

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link className="header__nav-link header__nav-link--profile" to={ AppRoute.Favorites }>
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <span className="header__user-name user__name">{ email }</span>
          </Link>
        </li>
        <li
          className="header__nav-item"
          onClick={ handleLogoutClick }
        >
          <Link to="/" className="header__nav-link" >
            <span className="header__signout">Sign out</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export { PageHeaderUser };
export default PageHeaderUserConnected;
