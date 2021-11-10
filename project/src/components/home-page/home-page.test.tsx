import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import { createFakeAppWithStore } from '../../utils/testing-utils';
import { fakeStoreWithAuth } from '../../mocks/mock-store';
import HomePage from './home-page';

describe('Component: HomePage', () => {
  const history = createMemoryHistory();
  it('should render correctly', () => {
    const fakeApp = createFakeAppWithStore(HomePage, fakeStoreWithAuth, history);
    render(fakeApp);

    expect(screen.getByTestId('home-tabs')).toBeInTheDocument();
    expect(screen.getByTestId('home-list')).toBeInTheDocument();
    expect(screen.getByTestId('home-map')).toBeInTheDocument();
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });
});
