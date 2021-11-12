import React from 'react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { Cities } from '../../const';
import HomePageTabs from './home-page-tabs';
import { mockStoreWithAuth } from '../../mocks/mock-store';

describe('Component: HomePageTabs', () => {
  const history = createMemoryHistory();
  const mockStore = configureMockStore();
  const store = mockStore(mockStoreWithAuth);

  it('should render correctly', () => {
    const { getByText } = render(
      <Provider store={ store }>
        <Router history={ history }>
          <HomePageTabs />
        </Router>
      </Provider>);

    Object.keys(Cities).forEach((cityName) => {
      expect(getByText(new RegExp(cityName, 'i'))).toBeInTheDocument();
    });
  });
});
