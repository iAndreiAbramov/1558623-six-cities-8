import React from 'react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import createMemoryHistory from 'history/createMemoryHistory';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { fakeStoreWithAuth } from '../../mocks/mock-store';
import { FETCH_FAIL_MESSAGE, FetchStatus } from '../../const';
import HomePageList from './home-page-list';
import { offersFrontMock } from '../../mocks/mock-offers';

describe('Component HomePageList', () => {
  const mockStore = configureMockStore();
  const history = createMemoryHistory();

  it('should render passed offers if fetch status is success', () => {
    const titles = offersFrontMock.map((item) => item.title);
    const prices = offersFrontMock.map((item) => item.price);
    const types = offersFrontMock.map((item) => item.type);

    const store = mockStore(fakeStoreWithAuth);

    render(
      <Provider store={ store }>
        <Router history={ history }>
          <HomePageList offersData={ offersFrontMock.slice() } />
        </Router>
      </Provider>);

    expect(screen.getByTestId('home-list')).toBeInTheDocument();
    titles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
    prices.forEach((price) => {
      expect(screen.getByText(new RegExp(price.toString()))).toBeInTheDocument();
    });
    types.forEach((type) => {
      expect(screen.getByText(new RegExp(type.toString()))).toBeInTheDocument();
    });
  });

  it('should render spinner if fetch status is in progress', () => {
    fakeStoreWithAuth.STATUS.fetchStatus = FetchStatus.InProgress;
    const store = mockStore(fakeStoreWithAuth);
    render(
      <Provider store={ store }>
        <Router history={ history }>
          <HomePageList offersData={ offersFrontMock.slice() } />
        </Router>
      </Provider>);

    expect(screen.getByText(/Please wait. Loading in progress/i)).toBeInTheDocument();
  });

  it('should render error message if fetch status is error', () => {
    fakeStoreWithAuth.STATUS.fetchStatus = FetchStatus.Error;
    const store = mockStore(fakeStoreWithAuth);
    render(
      <Provider store={ store }>
        <Router history={ history }>
          <HomePageList offersData={ offersFrontMock.slice() } />
        </Router>
      </Provider>);

    expect(screen.getByText(new RegExp(FETCH_FAIL_MESSAGE, 'i'))).toBeInTheDocument();
  });
});
