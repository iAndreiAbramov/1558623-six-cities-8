import { AppProps } from '../../types/app-types';
import { AppRoute, AuthorizationStatus } from '../../const';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FavoritesPage from '../favorites-page/favorites-page';
import LoginPage from '../login-page/login-page';
import NotFoundPage from '../not-found-page/not-found-page';
import HomePage from '../home-page/home-page';
import OfferPage from '../offer-page/offer-page';
import PrivateRoute from '../private-route/private-route';
import React from 'react';

//todo Добавить редирект для неавторизованных пользователей
//todo Переход на страницу Favorites осуществляется по клику на email пользователя

function App({ offersNumber }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={ AppRoute.Home } exact>
          <HomePage offersNumber={ offersNumber } />
        </Route>

        <Route path={ AppRoute.Login } exact>
          <LoginPage />
        </Route>

        <PrivateRoute
          exact
          path={ AppRoute.Favorites }
          authorizationStatus={ AuthorizationStatus.Auth }
          render={ () => <FavoritesPage isEmpty={ false } /> }
        />

        <Route path={ AppRoute.Offer } exact>
          <OfferPage />
        </Route>

        <Route>
          <NotFoundPage />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
