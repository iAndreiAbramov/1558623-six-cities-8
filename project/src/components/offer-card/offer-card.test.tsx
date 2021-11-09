import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { offerFirst } from '../../mocks/mock-offers';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import OfferCard from './offer-card';

describe('Component: OfferCard', () => {
  const mockStore = configureMockStore();
  const store = mockStore();
  const history = createMemoryHistory();

  it('should render passed data correctly', () => {
    const { title, price, type } = offerFirst;
    render(
      <Provider store={ store }>
        <Router history={ history }>
          <OfferCard
            data={ offerFirst }
            articleClass={ 'test-article-class' }
            imgWrapperClass={ 'test-wrapper-class' }
          />
        </Router>
      </Provider>
    );

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(new RegExp(price.toString()))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(type.toString()))).toBeInTheDocument();
  });
});
