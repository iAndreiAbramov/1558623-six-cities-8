import React from 'react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { Route, Router, Switch } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { mockStoreWithAuth } from '../../mocks/mock-store';
import FavoritesPageFooter from './favorites-page-footer';
import HomePage from '../home-page/home-page';

describe('Component: FavoritesPageFooter', () => {
  const history = createMemoryHistory();
  const mockStore = configureMockStore();
  const store = mockStore(mockStoreWithAuth);
  const fakeApp = (
    <Provider store={ store }>
      <Router history={ history }>
        <Switch>
          <Route path='/' exact>
            <HomePage />
          </Route>
          <Route>
            <FavoritesPageFooter />
          </Route>
        </Switch>
      </Router>
    </Provider>);

  it('should render correctly', () => {
    const { getByRole, getByAltText } = render(
      <Router history={ history }>
        <FavoritesPageFooter />
      </Router>);
    expect(getByRole('link')).toBeInTheDocument();
    expect(getByAltText(/6 cities logo/i)).toBeInTheDocument();
  });

  it('should redurect to main page on click', () => {
    const { getByRole } = render(fakeApp);
    const FAKE_URL = '/fakeUrl';
    history.push(FAKE_URL);

    expect(screen.queryByTestId('home-tabs')).not.toBeInTheDocument();
    expect(screen.queryByTestId('home-list')).not.toBeInTheDocument();
    expect(screen.queryByTestId('home-map')).not.toBeInTheDocument();

    userEvent.click(getByRole('link'));

    expect(screen.getByTestId('home-tabs')).toBeInTheDocument();
    expect(screen.getByTestId('home-list')).toBeInTheDocument();
    expect(screen.getByTestId('home-map')).toBeInTheDocument();
  });
});
