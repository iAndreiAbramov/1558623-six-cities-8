import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import App from '../app/app';
import { AppRoute } from '../../const';
import { createFakeAppWithStore } from '../../utils/testing-utils';
import { mockStoreWithNoAuth } from '../../mocks/mock-store';

const history = createMemoryHistory();
const fakeApp = createFakeAppWithStore(App, mockStoreWithNoAuth, history);

describe('Component: PrivateRoute', () => {
  it('should perform redirect from "/favorites" to "/login"', () => {
    render(fakeApp);
    history.push(AppRoute.Favorites);

    expect(screen.getByTestId('login-header')).toBeInTheDocument();
    expect(screen.getByTestId('login-main')).toBeInTheDocument();
  });
});
