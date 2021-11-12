import React from 'react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import { offersFrontMock } from '../../mocks/mock-offers';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import OfferPageNearList from './offer-page-near-list';

describe('Component: OfferPageNearList', () => {
  const mockStore = configureMockStore();
  const store = mockStore();
  const history = createMemoryHistory();

  it('should render passed data correctly', () => {
    const titles = offersFrontMock.map((item) => item.title);
    const prices = offersFrontMock.map((item) => item.price);
    const types = offersFrontMock.map((item) => item.type);

    render(
      <Provider store={ store }>
        <Router history={ history }>
          <OfferPageNearList nearOffersData={ offersFrontMock.slice() } />
        </Router>
      </Provider>);

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
});
