import React from 'react';
import { useSelector } from 'react-redux';
import { AuthorizationStatus } from '../../const';
import PageHeaderLogo from '../page-header-logo/page-header-logo';
import PageHeaderUserNotLogged from '../page-header-user-not-logged/page-header-user-not-logged';
import PageHeaderUserConnected from '../page-header-user/page-header-user';
import { getAuthorizationStatus } from '../../store/selectors';

function PageHeaderConnected(): JSX.Element {
  const authorizationStatus = useSelector(getAuthorizationStatus);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <PageHeaderLogo />
          {
            authorizationStatus === AuthorizationStatus.Auth
              ? <PageHeaderUserConnected />
              : <PageHeaderUserNotLogged />
          }
        </div>
      </div>
    </header>
  );
}

export default PageHeaderConnected;
