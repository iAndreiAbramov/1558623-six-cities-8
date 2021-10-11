import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AppProps } from '../../types/app-types';
import { AppRoute, AuthorizationStatus } from '../../const';
import FavoritesPage from '../favorites-page/favorites-page';
import HomePage from '../home-page/home-page';
import LoginPage from '../login-page/login-page';
import NotFoundPage from '../not-found-page/not-found-page';
import OfferPage from '../offer-page/offer-page';
import PrivateRoute from '../private-route/private-route';

function App(props: AppProps): JSX.Element {
  const { offersData, commentsData } = props;
  const favoritesData = offersData.filter((item) => item.isFavorite);

  return (
    <BrowserRouter>
      <Switch>
        <Route path={ AppRoute.Home } exact>
          <HomePage
            offersData={ offersData }
          />
        </Route>

        <Route path={ AppRoute.Login } exact>
          <LoginPage />
        </Route>

        <PrivateRoute
          exact
          path={ AppRoute.Favorites }
          authorizationStatus={ AuthorizationStatus.Auth }
          render={ () => (
            <FavoritesPage
              favoritesData={ favoritesData }
            />
          ) }
        />

        <Route path={ AppRoute.OfferId } exact>
          <OfferPage
            authorizationStatus={ AuthorizationStatus.Auth }
            offersData={ offersData }
            commentsData={ commentsData }
          />
        </Route>

        <Route>
          <NotFoundPage />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
