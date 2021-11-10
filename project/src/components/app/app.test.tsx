import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import App from './app';
import { AppRoute } from '../../const';
import { createFakeAppWithStore } from '../../utils/testing-utils';
import { mockStoreWithAuth } from '../../mocks/mock-store';

const history = createMemoryHistory();
const fakeApp = createFakeAppWithStore(App, mockStoreWithAuth, history);

describe('Component App:', () => {
  it('should render home page when user is on route "/"', () => {
    history.push(AppRoute.Home);
    render(fakeApp);

    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('home-tabs')).toBeInTheDocument();
    expect(screen.getByTestId('home-list')).toBeInTheDocument();
    expect(screen.getByTestId('home-map')).toBeInTheDocument();
  });

  it('should render offer page when user is on route "/offer/id"', () => {
    const TEST_OFFER_ID = '1';
    history.push(`${ AppRoute.Offer }/${ TEST_OFFER_ID }`);
    render(fakeApp);

    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('offer-main')).toBeInTheDocument();
  });

  it('should render login page when user is on route "/login"', () => {
    history.push(AppRoute.Login);
    render(fakeApp);

    expect(screen.getByTestId('login-header')).toBeInTheDocument();
    expect(screen.getByTestId('login-main')).toBeInTheDocument();
  });

  it('should render favorites page when user is on route "/favorites"', () => {
    history.push(AppRoute.Favorites);
    render(fakeApp);

    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('favorites-main')).toBeInTheDocument();
    expect(screen.getByTestId('favorites-footer')).toBeInTheDocument();
  });

  it('should render not found page when user is on incorrect route', () => {
    const incorrectRoute = '/incorrect';
    history.push(incorrectRoute);
    render(fakeApp);

    expect(screen.getByTestId('not-found-page-wrapper')).toBeInTheDocument();
  });
});
