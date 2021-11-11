import React from 'react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createFakeAppWithStore } from '../../utils/testing-utils';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { Route, Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import LoginPage from '../login-page/login-page';
import { mockStoreWithNoAuth } from '../../mocks/mock-store';
import PageHeaderUserNotLogged from './page-header-user-not-logged';

describe('Component: PageHeaderUserNotLogged', () => {
  const history = createMemoryHistory();
  const fakeApp = createFakeAppWithStore(PageHeaderUserNotLogged, mockStoreWithNoAuth, history);

  it('should render correctly', () => {
    const { getByText, getByRole } = render(fakeApp);

    expect(getByText(/Sign in/i)).toBeInTheDocument();
    expect(getByRole('link')).toBeInTheDocument();
  });

  it('should redirect to log in page on click', () => {
    const mockStore = configureMockStore();
    const store = mockStore(mockStoreWithNoAuth);
    history.push('/');
    const { getByRole } = render(
      <Provider store={ store }>
        <Router history={ history }>
          <Route>
            <PageHeaderUserNotLogged />
          </Route>
          <Route path="/login" exact>
            <LoginPage />
          </Route>
        </Router>
      </Provider>
    );

    userEvent.click(getByRole('link'));

    expect(screen.getByTestId('login-main')).toBeInTheDocument();
  });
});
