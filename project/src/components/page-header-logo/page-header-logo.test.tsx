import React from 'react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { Cities, DEFAULT_CITY_NAME } from '../../const';
import { configureMockStore } from '@jedmao/redux-mock-store';
import PageHeaderLogo from './page-header-logo';

const history = createMemoryHistory();
const mockStore = configureMockStore();
const store = mockStore({
  HOME: {
    activeCity: Cities[DEFAULT_CITY_NAME],
  }
});

describe('Component PageHeaderLogo', () => {
  it('should render correctly', () => {
    const { getByAltText, getByRole } = render(
      <Provider store={ store }>
        <Router history={ history }>
          <PageHeaderLogo />
        </Router>
      </Provider>,
    );

    expect(getByAltText('6 cities logo')).toBeInTheDocument();
    expect(getByRole('link')).toBeInTheDocument();
  });
});
