import React from 'react';
import { createMemoryHistory } from 'history';
import { createFakeAppWithStore } from '../../utils/testing-utils';
import HomePageMain from './home-page-main';
import { fakeStoreWithAuth } from '../../mocks/mock-store';
import { render, screen } from '@testing-library/react';
import { FetchStatus } from '../../const';

describe('Component: HomePageMain', () => {
  const history = createMemoryHistory();
  it('should render list of offers if it is not empty', () => {
    const fakeApp = createFakeAppWithStore(HomePageMain, fakeStoreWithAuth, history);
    render(fakeApp);

    expect(screen.queryByText(/No places to stay available/i)).not.toBeInTheDocument();
    expect(screen.queryByTestId('home-list')).toBeInTheDocument();
  });

  it('should render a spinner if fetch status is in progress', () => {
    const fakeStore = fakeStoreWithAuth;
    fakeStore.STATUS.fetchStatus = FetchStatus.InProgress;
    const fakeApp = createFakeAppWithStore(HomePageMain, fakeStore, history);
    render(fakeApp);

    expect(screen.getByText(/Please wait. Loading in progress/i)).toBeInTheDocument();
  });

  it('should render HomePageEmpty component if list of offers is empty and fetch status is success', () => {
    const fakeStore = fakeStoreWithAuth;
    fakeStore.HOME.offersData = [];
    fakeStore.STATUS.fetchStatus = FetchStatus.Success;
    const fakeApp = createFakeAppWithStore(HomePageMain, fakeStore, history);
    render(fakeApp);

    expect(screen.queryByTestId('home-list')).not.toBeInTheDocument();
    expect(screen.getByText(/No places to stay available/i)).toBeInTheDocument();
  });
});
