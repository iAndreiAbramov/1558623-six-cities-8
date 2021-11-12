import React from 'react';
import * as Redux from 'react-redux';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { offerFirst } from '../../mocks/mock-offers';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import FavoritesPageCard from './favorites-page-card';
import userEvent from '@testing-library/user-event';

describe('Component: FavoritesPageCard', () => {
  const mockStore = configureMockStore();
  const store = mockStore();
  const history = createMemoryHistory();

  it('should render passed data correctly', () => {
    const { title, price, type } = offerFirst;
    render(
      <Provider store={ store }>
        <Router history={ history }>
          <FavoritesPageCard data={ offerFirst } />
        </Router>
      </Provider>);

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(new RegExp(price.toString()))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(type.toString()))).toBeInTheDocument();
  });

  it('should dispatch actions on click', () => {
    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);

    render(
      <Provider store={ store }>
        <Router history={ history }>
          <FavoritesPageCard data={ offerFirst } />
        </Router>
      </Provider>);

    const [firstLink, secondLink] = screen.getAllByRole('link');
    userEvent.click(firstLink);
    userEvent.click(secondLink);

    expect(dispatch).toBeCalledTimes(2);
  });
});
