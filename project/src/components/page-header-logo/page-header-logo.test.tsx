import React from 'react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { Router, Route } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { Cities, DEFAULT_CITY_NAME } from '../../const';
import PageHeaderLogo from './page-header-logo';

const history = createMemoryHistory();
const mockStore = configureMockStore();
const store = mockStore({
  HOME: {
    activeCity: Cities[DEFAULT_CITY_NAME],
  }
});

const headerLogo = (
  <Provider store={ store }>
    <Router history={ history }>
      <Route path="/" exact>
        <h1>This is main page</h1>
      </Route>
      <Route>
        <PageHeaderLogo />
      </Route>
    </Router>
  </Provider>);

describe('Component PageHeaderLogo', () => {
  it('should render correctly', () => {
    const { getByAltText, getByRole } = render(headerLogo);

    expect(getByAltText('6 cities logo')).toBeInTheDocument();
    expect(getByRole('link')).toBeInTheDocument();
  });

  it('should redirect to main page on click', () => {
    render(headerLogo);

    expect(screen.getByText(/This is main page/i)).not.toBeInTheDocument();
    userEvent.click(screen.getByRole('link'));
    expect(screen.getByText(/This is main page/i)).toBeInTheDocument();
  })
});
