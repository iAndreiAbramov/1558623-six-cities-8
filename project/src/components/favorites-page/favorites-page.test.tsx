import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import { createFakeAppWithStore } from '../../utils/testing-utils';
import { fakeStoreWithAuth } from '../../mocks/mock-store';
import FavoritesPage from './favorites-page';
import { FetchStatus } from '../../const';

describe('Component: FavoritesPage', () => {
  const history = createMemoryHistory();
  it('should render list of favorite hotels if it is not empty', () => {
    const fakeApp = createFakeAppWithStore(FavoritesPage, fakeStoreWithAuth, history);
    render(fakeApp);

    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('favorites-main')).toBeInTheDocument();
    expect(screen.getByTestId('favorites-footer')).toBeInTheDocument();
  });

  it('should render template for empty page if favorites list is empty', () => {
    const fakeStore = fakeStoreWithAuth;
    fakeStore.FAVORITES.favoritesData = [];
    const fakeApp = createFakeAppWithStore(FavoritesPage, fakeStore, history);
    render(fakeApp);

    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.queryByTestId('favorites-main')).not.toBeInTheDocument();
    expect(screen.queryByTestId('favorites-empty')).toBeInTheDocument();
    expect(screen.getByTestId('favorites-footer')).toBeInTheDocument();
  });

  it('should render a spinner if fetch status is in progress', () => {
    const fakeStore = fakeStoreWithAuth;
    fakeStore.STATUS.fetchStatus = FetchStatus.InProgress;
    const fakeApp = createFakeAppWithStore(FavoritesPage, fakeStore, history);
    render(fakeApp);

    expect(screen.queryByTestId('header')).not.toBeInTheDocument();
    expect(screen.getByText(/Please wait. Loading in progress/i)).toBeInTheDocument();
    expect(screen.queryByTestId('favorites-main')).not.toBeInTheDocument();
    expect(screen.queryByTestId('favorites-empty')).not.toBeInTheDocument();
    expect(screen.queryByTestId('favorites-footer')).not.toBeInTheDocument();
  });
});
