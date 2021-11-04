import React from 'react';
import LoginPageForm from '../login-page-form/login-page-form';
import PageHeaderLogo from '../page-header-logo/page-header-logo';
import { getRandomArrayItem } from '../../utils/common-utils';
import { Cities } from '../../const';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { initActiveCityAction } from '../../store/api-actions';

function LoginPage(): JSX.Element {
  const randomCityName = getRandomArrayItem(Object.keys(Cities));
  const dispatch = useDispatch();
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
              <Link className="locations__item-link" to="/">
                <span
                  onClick={ () => dispatch(initActiveCityAction(randomCityName)) }
                >
                  { randomCityName }
                </span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
