import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AppRoute } from '../../const';
import FavoritesPageConnected from '../favorites-page/favorites-page';
import HomePage from '../home-page/home-page';
import LoginPage from '../login-page/login-page';
import NotFoundPage from '../not-found-page/not-found-page';
import OfferPage from '../offer-page/offer-page';
import PrivateRouteConnected from '../private-route/private-route';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={ AppRoute.Home } exact>
          <HomePage />
        </Route>

        <Route path={ AppRoute.Login } exact>
          <LoginPage />
        </Route>

        <PrivateRouteConnected
          exact
          path={ AppRoute.Favorites }
          render={ () => (
            <FavoritesPageConnected />
          ) }
        />

        {/*<Route path={ AppRoute.OfferId } exact>*/}
        {/*  <OfferPage*/}
        {/*    authorizationStatus={ AuthorizationStatus.Auth }*/}
        {/*  />*/}
        {/*</Route>*/}

        <Route>
          <NotFoundPage />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
