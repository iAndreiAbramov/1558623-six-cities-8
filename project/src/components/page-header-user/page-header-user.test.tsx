import React from 'react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { Route, Router } from 'react-router-dom';
import thunk from 'redux-thunk';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { createApi } from '../../services/api';
import FavoritesPage from '../favorites-page/favorites-page';
import HomePage from '../home-page/home-page';
import { mockStoreWithAuth } from '../../mocks/mock-store';
import PageHeaderUser from './page-header-user';

describe('Component: PageHeaderUser', () => {
  const history = createMemoryHistory();

  it('should render correctly', () => {
    const mockStore = configureMockStore();
    const store = mockStore(mockStoreWithAuth);
    const { getAllByRole, getByText } = render(
      <Provider store={ store }>
        <Router history={ history }>
          <PageHeaderUser />
        </Router>
      </Provider>);

    expect(getByText(mockStoreWithAuth.USER.currentUserData.email))
      .toBeInTheDocument();
    expect(getAllByRole('link')).toHaveLength(2);
  });

  it('should redirect to favorites page', () => {
    const onUnauthorized = jest.fn();
    const api = createApi(onUnauthorized);
    const middlewares = [thunk.withExtraArgument(api)];
    const mockStore = configureMockStore(middlewares);
    const store = mockStore(mockStoreWithAuth);
    history.push('/fake');

    const { getAllByRole } = render(
      <Provider store={ store }>
        <Router history={ history }>
          <Route>
            <PageHeaderUser />
          </Route>
          <Route path="/favorites" exact>
            <FavoritesPage />
          </Route>
        </Router>
      </Provider>);

    userEvent.click(getAllByRole('link')[0]);

    expect(screen.getByTestId('favorites-main')).toBeInTheDocument();
  });

  it('should redirect to home page on logout', () => {
    const onUnauthorized = jest.fn();
    const api = createApi(onUnauthorized);
    const middlewares = [thunk.withExtraArgument(api)];
    const mockStore = configureMockStore(middlewares);
    const store = mockStore(mockStoreWithAuth);
    history.push('/fake');

    const { getAllByRole } = render(
      <Provider store={ store }>
        <Router history={ history }>
          <Route>
            <PageHeaderUser />
          </Route>
          <Route path="/" exact>
            <HomePage />
          </Route>
        </Router>
      </Provider>);

    userEvent.click(getAllByRole('link')[1]);

    expect(screen.getByTestId('home-tabs')).toBeInTheDocument();
    expect(screen.getByTestId('home-list')).toBeInTheDocument();
    expect(screen.getByTestId('home-map')).toBeInTheDocument();
  });
});
