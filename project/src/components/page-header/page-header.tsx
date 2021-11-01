import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { AuthorizationStatus } from '../../const';
import PageHeaderLogo from '../page-header-logo/page-header-logo';
import PageHeaderUserNotLogged from '../page-header-user-not-logged/page-header-user-not-logged';
import PageHeaderUserConnected from '../page-header-user/page-header-user';
import { StateTypes } from '../../types/state-types';

const mapStateToProps = (state: StateTypes) => ({
  authorizationStatus: state.authorization,
});

const pageHeaderConnector = connect(mapStateToProps);
const PageHeaderConnected = pageHeaderConnector(PageHeader);

type PageHeaderTypes = ConnectedProps<typeof pageHeaderConnector>

function PageHeader(props: PageHeaderTypes): JSX.Element {
  const { authorizationStatus } = props;

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

export { PageHeader };
export default PageHeaderConnected;
