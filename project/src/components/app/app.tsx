import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { AppRoute } from '../../const';
import browserHistory from '../../services/browser-history';
import FavoritesPage from '../favorites-page/favorites-page';
import HomePage from '../home-page/home-page';
import LoginPage from '../login-page/login-page';
import NotFoundPage from '../not-found-page/not-found-page';
import OfferPage from '../offer-page/offer-page';
import PrivateRoute from '../private-route/private-route';
import { ToastContainer } from 'react-toastify';

function App(): JSX.Element {
  return (
    <Router history={ browserHistory }>
      <ToastContainer />
      <Switch>
        <Route path={ AppRoute.Home } exact>
          <HomePage />
        </Route>

        <Route path={ AppRoute.Login } exact>
          <LoginPage />
        </Route>

        <PrivateRoute
          exact
          path={ AppRoute.Favorites }
          render={ () => (
            <FavoritesPage />
          ) }
        />

        <Route path={ AppRoute.OfferId } exact>
          <OfferPage />
        </Route>

        <Route>
          <NotFoundPage />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
