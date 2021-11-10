import React from 'react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import HomePageTab from './home-page-tab';
import { mockStoreWithAuth } from '../../mocks/mock-store';
import { Provider } from 'react-redux';
import { TEST_CITY_NAME } from '../../const';

describe('Component: HomePageTab', () => {
  const history = createMemoryHistory();
  const mockStore = configureMockStore();
  const store = mockStore(mockStoreWithAuth);

  const fakeApp = (
    <Provider store={ store }>
      <Router history={ history }>
        <HomePageTab
          name={ TEST_CITY_NAME }
        />
      </Router>
    </Provider>);

  it('should render correctly', () => {
    const { getByText } = render(fakeApp);
    expect(getByText(TEST_CITY_NAME)).toBeInTheDocument();
  });
});
