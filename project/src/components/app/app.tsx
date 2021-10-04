import { AppProps } from '../../types/app-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from '../login-page/login-page';
import NotFoundPage from '../not-found-page/not-found-page';
import HomePage from '../home-page/home-page';
import PageHeader from '../page-header/page-header';
import React from 'react';
import RoomPageMain from '../room-page-main/room-page-main';
import FavoritesPage from '../favorites-page/favorites-page';

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
