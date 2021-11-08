import React from 'react';
import { useSelector } from 'react-redux';
import { AuthorizationStatus } from '../../const';
import { getAuthorizationStatus } from '../../store/selectors';
import PageHeaderLogo from '../page-header-logo/page-header-logo';
import PageHeaderUserNotLogged from '../page-header-user-not-logged/page-header-user-not-logged';
import PageHeaderUser from '../page-header-user/page-header-user';

function PageHeader(): JSX.Element {
  const authorizationStatus = useSelector(getAuthorizationStatus);

  return (
    <header className="header" data-testid="header-container">
      <div className="container">
        <div className="header__wrapper">
          <PageHeaderLogo />
          {
            authorizationStatus === AuthorizationStatus.Auth
              ? <PageHeaderUser />
              : <PageHeaderUserNotLogged />
          }
        </div>
      </div>
    </header>
  );
}

export default PageHeader;
