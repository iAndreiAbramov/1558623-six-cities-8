import React from 'react';
import { createMemoryHistory } from 'history';
import { Route, Router, Switch } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { fakeStoreWithAuth } from '../../mocks/mock-store';
import FavoritesPageCity from './favorites-page-city';
import HomePage from '../home-page/home-page';
import { offerSecond, offerThird } from '../../mocks/mock-offers';
import { TEST_CITY_NAME } from '../../const';

describe('Component: FavoritesPageCard', () => {
  const history = createMemoryHistory();
  const mockStore = configureMockStore();
  const store = mockStore(fakeStoreWithAuth);
  const dataMock = [offerSecond, offerThird];
  const fakeApp = (
    <Provider store={ store }>
      <Router history={ history }>
        <Switch>
          <Route path='/' exact>
            <HomePage />
          </Route>
          <Route>
            <FavoritesPageCity
              cityName={ TEST_CITY_NAME }
              data={ dataMock }
            />
          </Route>
        </Switch>
      </Router>
    </Provider>);

  it('should render passed data correctly', () => {
    render(
      <Provider store={ store }>
        <Router history={ history }>
          <FavoritesPageCity
            cityName={ TEST_CITY_NAME }
            data={ dataMock }
          />
        </Router>
      </Provider>);
    expect(screen.getByTestId('favorites-home-link')).toBeInTheDocument();
  });

  it('should redirect to main page on click', () => {
    const { getByTestId } = render(fakeApp);
    const FAKE_URL = '/fake';
    history.push(FAKE_URL);

    expect(screen.queryByTestId('home-tabs')).not.toBeInTheDocument();
    expect(screen.queryByTestId('home-list')).not.toBeInTheDocument();
    expect(screen.queryByTestId('home-map')).not.toBeInTheDocument();

    userEvent.click(getByTestId('favorites-home-link'));

    expect(screen.getByTestId('home-tabs')).toBeInTheDocument();
    expect(screen.getByTestId('home-list')).toBeInTheDocument();
    expect(screen.getByTestId('home-map')).toBeInTheDocument();
  });
});
