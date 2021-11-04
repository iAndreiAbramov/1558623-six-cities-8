import React from 'react';
import LoginPageForm from '../login-page-form/login-page-form';
import PageHeaderLogo from '../page-header-logo/page-header-logo';

function LoginPage(): JSX.Element {
  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <PageHeaderLogo />
          </div>
        </div>
      </header>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>

            <LoginPageForm />

          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              {/*todo Разобраться куда ссылка и зменить на Link*/ }
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
