import React from 'react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import OfferPageReviews from './offer-page-reviews';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import thunk from 'redux-thunk';
import { createApi } from '../../services/api';
import { mockStoreWithAuth, mockStoreWithNoAuth } from '../../mocks/mock-store';
import userEvent from '@testing-library/user-event';

describe('Component: OfferPageReviews', () => {
  const onUnauthorized = jest.fn();
  const api = createApi(onUnauthorized);
  const middlewares = [thunk.withExtraArgument(api)];
  const mockStore = configureMockStore(middlewares);
  const TEST_ID = '1';
  const TEST_COMMENT_LONG = 'This is test comment and it\'s length is more than 50 symbols';
  const TEST_CHECKBOX = 4;

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

  it('should render new comment after it was submited', async () => {
    const store = mockStore(mockStoreWithAuth);
    const { rerender } = await render(
      <Provider store={ store }>
        <OfferPageReviews
          id={ TEST_ID }
        />
      </Provider>);

    userEvent.type(screen.getByRole('textbox'), TEST_COMMENT_LONG);
    userEvent.click(screen.getAllByRole('radio')[TEST_CHECKBOX]);
    userEvent.click(screen.getByRole('button'));

    rerender(
      <Provider store={ store }>
        <OfferPageReviews
          id={ TEST_ID }
        />
      </Provider>);

    expect(screen.getByText(TEST_COMMENT_LONG)).toBeInTheDocument();
  });
});
