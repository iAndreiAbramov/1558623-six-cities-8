import React from 'react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import OfferPageReviews from './offer-page-reviews';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import thunk from 'redux-thunk';
import { createApi } from '../../services/api';
import { mockStoreWithAuth, mockStoreWithNoAuth } from '../../mocks/mock-store';

describe('Component: OfferPageReviews', () => {
  const onUnauthorized = jest.fn();
  const api = createApi(onUnauthorized);
  const middlewares = [thunk.withExtraArgument(api)];
  const mockStore = configureMockStore(middlewares);
  const TEST_ID = '1';

  it('should render comments list if it is not empty', () => {
    const store = mockStore(mockStoreWithAuth);
    render(
      <Provider store={ store }>
        <OfferPageReviews
          id={ TEST_ID }
        />
      </Provider>);

    expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
  });

  it('should not render comments list if it is empty', () => {
    mockStoreWithAuth.OFFER.currentHotelComments = [];
    const store = mockStore(mockStoreWithAuth);
    render(
      <Provider store={ store }>
        <OfferPageReviews
          id={ TEST_ID }
        />
      </Provider>);

    expect(screen.queryByText(/Reviews/i)).not.toBeInTheDocument();
  });

  it('should render new comment form if user is authorized', () => {
    const store = mockStore(mockStoreWithAuth);
    render(
      <Provider store={ store }>
        <OfferPageReviews
          id={ TEST_ID }
        />
      </Provider>);

    expect(screen.getByLabelText(/Your review/i)).toBeInTheDocument();
  });

  it('should not render new comment form if user is not authorized', () => {
    const store = mockStore(mockStoreWithNoAuth);
    render(
      <Provider store={ store }>
        <OfferPageReviews
          id={ TEST_ID }
        />
      </Provider>);

    expect(screen.queryByLabelText(/Your review/i)).not.toBeInTheDocument();
  });
});
