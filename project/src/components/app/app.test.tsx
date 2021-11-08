import React from 'react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import App from './app';
import { AppRoute, AuthorizationStatus, Cities, DEFAULT_CITY_NAME, FetchStatus } from '../../const';
import { offersFrontMock, pointsMock } from '../../mocks/mock-offers';

const history = createMemoryHistory();
const mockStore = configureMockStore();

const store = mockStore({
  USER: { authorization: AuthorizationStatus.Auth },
  STATUS: { fetchStatus: FetchStatus.Success },
  HOME: {
    activeCity: Cities[DEFAULT_CITY_NAME],
    offersData: offersFrontMock,
    pointsForMap: pointsMock,
  }
});

const fakeApp = (
    <Provider store={ store }>
      <Router history={ history }>
        <App />
      </Router>
    </Provider>
);

describe('Component App:', () => {
  it('should render home page when user is on route "/"', () => {
    history.push(AppRoute.Home);
    render(fakeApp);
  });
});
