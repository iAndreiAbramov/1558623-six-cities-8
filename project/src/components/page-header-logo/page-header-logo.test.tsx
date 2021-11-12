import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../app/app';
import { AppRoute } from '../../const';
import { createFakeAppWithStore } from '../../utils/testing-utils';
import { mockStoreWithAuth } from '../../mocks/mock-store';
import PageHeaderLogo from './page-header-logo';

describe('Component PageHeaderLogo', () => {
  const history = createMemoryHistory();

  it('should render correctly', () => {
    const fakeApp = createFakeAppWithStore(PageHeaderLogo, mockStoreWithAuth, history);
    const { getByAltText, getByRole, getByTestId } = render(fakeApp);

    expect(getByTestId('header-logo')).toBeInTheDocument();
    expect(getByAltText('6 cities logo')).toBeInTheDocument();
    expect(getByRole('link')).toBeInTheDocument();
  });

  it('should redirect to main page on click', async () => {
    const fakeApp = createFakeAppWithStore(App, mockStoreWithAuth, history);
    render(fakeApp);
    history.push(AppRoute.Favorites);

    expect(screen.queryByTestId('home-tabs')).not.toBeInTheDocument();
    expect(screen.queryByTestId('home-list')).not.toBeInTheDocument();
    expect(screen.queryByTestId('home-map')).not.toBeInTheDocument();

    userEvent.click(screen.getByTestId('header-logo'));

    expect(screen.queryByTestId('home-tabs')).toBeInTheDocument();
    expect(screen.queryByTestId('home-list')).toBeInTheDocument();
    expect(screen.queryByTestId('home-map')).toBeInTheDocument();
  });
});
