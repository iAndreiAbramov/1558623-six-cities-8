import PageHeaderLogo from '../page-header-logo/page-header-logo';
import PageHeaderUser from '../page-header-user/page-header-user';
import React from 'react';

//todo Вынести блок с авторизацией в отдельный компонент

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
