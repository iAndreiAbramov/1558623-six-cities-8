import React from 'react';
import * as Redux from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import HomePageTab from './home-page-tab';
import { mockStoreWithAuth } from '../../mocks/mock-store';
import { Provider } from 'react-redux';
import { TEST_CITY_NAME } from '../../const';
import userEvent from '@testing-library/user-event';

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

  it('should dispatch an action on click', () => {
    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);
    render(fakeApp);

    userEvent.click(screen.getByRole('link'));

    expect(dispatch).toBeCalledTimes(1);
  });
});
