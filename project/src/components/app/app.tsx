import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { CommentsDataTypes } from '../../types/comments-data-types';
import FavoritesPage from '../favorites-page/favorites-page';
import HomePage from '../home-page/home-page';
import LoginPage from '../login-page/login-page';
import NotFoundPage from '../not-found-page/not-found-page';
import { OfferDataTypes } from '../../types/offer-data-types';
import OfferPage from '../offer-page/offer-page';
import PrivateRoute from '../private-route/private-route';

type AppTypes = {
  offersData: OfferDataTypes[],
  commentsData: CommentsDataTypes[],
}

function App(props: AppTypes): JSX.Element {
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
