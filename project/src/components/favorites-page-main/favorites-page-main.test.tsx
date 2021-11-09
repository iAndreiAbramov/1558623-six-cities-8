import React from 'react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import FavoritesPageMain from './favorites-page-main';
import { offersFrontMock } from '../../mocks/mock-offers';

const mockStore = configureMockStore();
const store = mockStore();
const history = createMemoryHistory();

describe('Component FavoritesPageMain', () => {
  it('should render passed offers', () => {
    const titles = offersFrontMock.map((item) => item.title);
    const prices = offersFrontMock.map((item) => item.price);
    render(
      <Provider store={ store }>
        <Router history={ history }>
          <FavoritesPageMain favoritesData={ offersFrontMock.slice() } />
        </Router>
      </Provider>
    );
    expect(screen.getByTestId('favorites-main')).toBeInTheDocument();
    titles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
    prices.forEach((price) => {
      expect(screen.getByText(new RegExp(price.toString()))).toBeInTheDocument();
    });
  });
});
