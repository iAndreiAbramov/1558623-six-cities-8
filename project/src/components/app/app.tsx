import { AppProps } from '../../types/app-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../home-page/home-page';
import React from 'react';
import LoginPage from '../login-page/login-page';
import PageHeader from '../page-header/page-header';
import RoomPageMain from '../room-page-main/room-page-main';
import NotFoundPage from '../not-found-page/not-found-page';
import FavoritesPageMain from '../favorites-page-main/favorites-page-main';
import FavoritesPageFooter from '../favorites-page-footer/favorites-page-footer';

function App({ offersNumber }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <HomePage offersNumber={ offersNumber } />
        </Route>

        <Route path="/login" exact>
          <PageHeader />
          <LoginPage />
        </Route>

        <Route path="/favorites" exact>
          <PageHeader />
          <FavoritesPageMain />
          <FavoritesPageFooter />
        </Route>

        <Route path="/offer" exact>
          <PageHeader />
          <RoomPageMain />
        </Route>

        <Route>
          <NotFoundPage />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
