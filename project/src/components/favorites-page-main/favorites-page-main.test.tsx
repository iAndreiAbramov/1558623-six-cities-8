import React from 'react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { AppRoute } from '../../const';
import FavoritesPageMain from './favorites-page-main';
import { offersFrontMock } from '../../mocks/mock-offers';

const mockStore = configureMockStore();
const store = mockStore();
const history = createMemoryHistory();

describe('Component FavoritesPageMain', () => {
  it('should render correctly', () => {
    history.push(AppRoute.Favorites);
    render(
      <Provider store={ store }>
        <Router history={ history }>
          <FavoritesPageMain favoritesData={ offersFrontMock.slice() } />
        </Router>
      </Provider>
    );
    expect(screen.getByTestId('favorites-main')).toBeInTheDocument();
  });
});
