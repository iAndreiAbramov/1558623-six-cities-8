import { AppProps } from '../../types/app-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FavoritesPage from '../favorites-page/favorites-page';
import LoginPage from '../login-page/login-page';
import NotFoundPage from '../not-found-page/not-found-page';
import HomePage from '../home-page/home-page';
import OfferPage from '../offer-page/offer-page';
import React from 'react';

//todo Создать enum с адресами
//todo Добавить редирект для неавторизованных пользователей

function App({ offersNumber }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <HomePage offersNumber={ offersNumber } />
        </Route>

        <Route path="/login" exact>
          <LoginPage />
        </Route>

        <Route path="/favorites" exact>
          <FavoritesPage isEmpty={ false } />
        </Route>

        <Route path="/offer/:id" exact>
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
