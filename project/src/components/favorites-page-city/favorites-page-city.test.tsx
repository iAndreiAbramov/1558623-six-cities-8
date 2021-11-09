import React from 'react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { Route, Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { offerSecond, offerThird } from '../../mocks/mock-offers';
import userEvent from '@testing-library/user-event';
import { fakeStoreWithAuth } from '../../mocks/mock-store';
import FavoritesPageCity from './favorites-page-city';
import HomePage from '../home-page/home-page';
import { TEST_CITY_NAME } from '../../const';

describe('Component: FavoritesPageCard', () => {
  const mockStore = configureMockStore();
  const store = mockStore(fakeStoreWithAuth);
  const history = createMemoryHistory();
  const dataMock = [offerSecond, offerThird];
  const fakeApp = (
    <Provider store={ store }>
      <Router history={ history }>
        <Route>
          <FavoritesPageCity
            cityName={ TEST_CITY_NAME }
            data={ dataMock }
          />
        </Route>
        <Route path='/' exact>
          <HomePage />
        </Route>
      </Router>
    </Provider>);

  it('should render passed data correctly', () => {
    render(fakeApp);
    expect(screen.getByTestId('favorites-home-link')).toBeInTheDocument();
  });

  it('should redirect to main page on link click', () => {
    render(fakeApp);
    userEvent.click(screen.getByTestId('favorites-home-link'));
    expect(screen.getByTestId('home-tabs')).toBeInTheDocument();
    expect(screen.getByTestId('home-list')).toBeInTheDocument();
    expect(screen.getByTestId('home-map')).toBeInTheDocument();
  });
});
