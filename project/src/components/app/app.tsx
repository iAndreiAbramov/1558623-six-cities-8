import { AppProps } from '../../types/app-types';
import { AppRoute } from '../../const';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FavoritesPage from '../favorites-page/favorites-page';
import LoginPage from '../login-page/login-page';
import NotFoundPage from '../not-found-page/not-found-page';
import HomePage from '../home-page/home-page';
import OfferPage from '../offer-page/offer-page';
import React from 'react';

//todo Добавить редирект для неавторизованных пользователей

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

        <Route path={ AppRoute.Favorites } exact>
          <FavoritesPage isEmpty={ false } isSignedIn={ false } />
        </Route>

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
