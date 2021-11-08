import React from 'react';
import { Action, AnyAction, Store } from 'redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { Route, Router, Switch } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, FetchStatus } from '../../const';
import PrivateRoute from '../private-route/private-route';

const history = createMemoryHistory();
const mockStore = configureMockStore();

const storeWithAuth = mockStore({
  USER: { authorization: AuthorizationStatus.Auth },
  STATUS: { fetchStatus: FetchStatus.Success },
});

const storeWithNoAuth = mockStore({
  USER: { authorization: AuthorizationStatus.Auth },
  STATUS: { fetchStatus: FetchStatus.Success },
});

const getFakeApp = <A extends Action = AnyAction>(store: Store<any, A>) => (
  <Provider store={ store }>
    <Router history={ history }>
      <Switch>
        <Route path={ AppRoute.Home } exact>
          <h1>Home page</h1>
        </Route>

        <Route path={ AppRoute.Login } exact>
          <h1>Login page</h1>
        </Route>

        <PrivateRoute
          exact
          path={ AppRoute.Favorites }
          render={ () => (<h1>Favorites page</h1>) }
        />

        <Route path={ AppRoute.OfferId } exact>
          <h1>Offer page</h1>
        </Route>

        <Route>
          <h1>Not found page</h1>
        </Route>
      </Switch>
    </Router>
  </Provider>
);

describe('Component App:', () => {
  it('should render home page when user is on route "/"', () => {
    history.push(AppRoute.Home);
    const { getByText } = render(getFakeApp(storeWithAuth));
    expect(getByText(/Home page/i)).toBeInTheDocument();
  });

  it('should render login page when user is on route "/login"', () => {
    history.push(AppRoute.Login);
    const { getByText } = render(getFakeApp(storeWithNoAuth));
    expect(getByText(/Login page/i)).toBeInTheDocument();
  });

  it('should render offer page when user is on route "/offer/id"', () => {
    const testOfferId = '1';
    history.push(`${ AppRoute.Offer }/${ testOfferId }`);
    const { getByText } = render(getFakeApp(storeWithAuth));
    expect(getByText(/Offer page/i)).toBeInTheDocument();
  });

  it('should render favorites page when user is on route "/favorites"', () => {
    history.push(`${ AppRoute.Favorites }`);
    const { getByText } = render(getFakeApp(storeWithAuth));
    expect(getByText(/Favorites page/i)).toBeInTheDocument();
  });
});
