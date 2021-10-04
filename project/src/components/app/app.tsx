import { AppProps } from '../../types/app-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from '../main-page/main-page';
import React from 'react';
import LoginPage from '../login-page/login-page';
import PageHeader from '../page-header/page-header';
import RoomPageMain from '../room-page-main/room-page-main';
import NotFoundPage from '../not-found-page/not-found-page';

function App({ offersNumber }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>

        <Route path="/" exact>
          <MainPage offersNumber={ offersNumber } />
        </Route>

        <Route path="/login" exact>
          <LoginPage />
        </Route>
        {/*//todo Create Favourites page component*/}
        {/*<Route path="/favorites" exact>*/}

        {/*</Route>*/}
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
