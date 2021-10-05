import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AppProps } from '../../types/app-types';
import { AppRoute, AuthorizationStatus } from '../../const';
import FavoritesPage from '../favorites-page/favorites-page';
import LoginPage from '../login-page/login-page';
import NotFoundPage from '../not-found-page/not-found-page';
import HomePage from '../home-page/home-page';
import OfferPage from '../offer-page/offer-page';
import PrivateRoute from '../private-route/private-route';

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
          authorizationStatus={ AuthorizationStatus.NoAuth }
          render={ () => <FavoritesPage isEmpty={ false } /> }
        />

        <Route path={ AppRoute.OfferId } exact>
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
