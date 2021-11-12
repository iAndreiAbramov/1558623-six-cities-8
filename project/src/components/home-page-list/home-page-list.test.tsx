import React, { useState } from 'react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { mockStoreWithAuth } from '../../mocks/mock-store';
import { FETCH_FAIL_MESSAGE, FetchStatus, SortOptions } from '../../const';
import HomePageList from './home-page-list';
import { offersFrontMock } from '../../mocks/mock-offers';
import { renderHook } from '@testing-library/react-hooks';
import userEvent from '@testing-library/user-event';

describe('Component HomePageList', () => {
  const mockStore = configureMockStore();
  const history = createMemoryHistory();

  it('should render passed offers if fetch status is success', () => {
    const titles = offersFrontMock.map((item) => item.title);
    const prices = offersFrontMock.map((item) => item.price);
    const types = offersFrontMock.map((item) => item.type);

    const store = mockStore(mockStoreWithAuth);

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

  it('should open sort menu on click', () => {
    const store = mockStore(mockStoreWithAuth);
    render(
      <Provider store={ store }>
        <Router history={ history }>
          <HomePageList offersData={ offersFrontMock.slice() } />
        </Router>
      </Provider>);

    userEvent.click(screen.getByText(new RegExp(SortOptions.Popular, 'i')));

    expect(screen.getByText(/Price: low to high/i)).toBeInTheDocument();
    expect(screen.getByText(/Price: high to low/i)).toBeInTheDocument();
    expect(screen.getByText(/Top rated first/i)).toBeInTheDocument();
  });

  it('should set correct sort option on sort menu click', () => {
    const store = mockStore(mockStoreWithAuth);
    render(
      <Provider store={ store }>
        <Router history={ history }>
          <HomePageList offersData={ offersFrontMock.slice() } />
        </Router>
      </Provider>);

    userEvent.click(screen.getByTestId('home-list-sort-dropdown'));
    userEvent.click(screen.getByText(new RegExp(SortOptions.RatingDown, 'i')));

    const { result } = renderHook(() => useState(SortOptions.RatingDown));

    expect(result.current[0]).toBe(SortOptions.RatingDown);
  });

  it('should render spinner if fetch status is in progress', () => {
    mockStoreWithAuth.STATUS.fetchStatus = FetchStatus.InProgress;
    const store = mockStore(mockStoreWithAuth);
    render(
      <Provider store={ store }>
        <Router history={ history }>
          <HomePageList offersData={ offersFrontMock.slice() } />
        </Router>
      </Provider>);

    expect(screen.getByText(/Please wait. Loading in progress/i)).toBeInTheDocument();
  });

  it('should render error message if fetch status is error', () => {
    mockStoreWithAuth.STATUS.fetchStatus = FetchStatus.Error;
    const store = mockStore(mockStoreWithAuth);
    render(
      <Provider store={ store }>
        <Router history={ history }>
          <HomePageList offersData={ offersFrontMock.slice() } />
        </Router>
      </Provider>);

    expect(screen.getByText(new RegExp(FETCH_FAIL_MESSAGE, 'i'))).toBeInTheDocument();
  });
});
