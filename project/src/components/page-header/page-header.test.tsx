import React from 'react';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { createFakeAppWithStore } from '../../utils/testing-utils';
import { mockStoreWithAuth } from '../../mocks/mock-store';
import PageHeader from './page-header';

describe('Component: PageHeader', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const fakeApp = createFakeAppWithStore(PageHeader, mockStoreWithAuth, history);
    const { getByTestId } = render(fakeApp);

    expect(getByTestId('header')).toBeInTheDocument();
  });
});
