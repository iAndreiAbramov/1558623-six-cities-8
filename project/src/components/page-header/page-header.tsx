import React from 'react';
import PageHeaderLogo from '../page-header-logo/page-header-logo';
import PageHeaderUser from '../page-header-user/page-header-user';

function PageHeader(): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <PageHeaderLogo />
          <PageHeaderUser />
        </div>
      </div>
    </header>
  );
}

export default PageHeader;
